import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

import UserModel from "../models/User.js";
import CardModel from "../models/Card.js";

export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.status(201).json({
      ...userData,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant register",
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: "Wrong password or login",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant login",
    });
  }
};

export const getMe = async (req, res) => {
  const user = await UserModel.findById(req.userId);

  try {
    if (!user) {
      return res.status(404).json({
        message: "No such user",
      });
    }

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No acces",
    });
  }
};

export const updateMe = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");

  try {
    await UserModel.updateOne(
      {
        _id: userId,
      },
      {
        fullName: req.body.fullName,
        email: req.body.email,
        birthday: req.body.birthday,
      }
    );

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to update profile",
    });
  }
};

export const updatePassword = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");

  try {
    const { currentPassword, newPassword } = req.body;

    const user = await UserModel.findOne({
      _id: userId,
    });

    const isValidPass = await bcrypt.compare(
      currentPassword,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    user.passwordHash = hash;
    user.save();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to change password",
    });
  }
};

export const addAddress = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");

  try {
    await UserModel.updateOne(
      {
        _id: userId,
      },
      {
        deliveryAddress: {
          lastName: req.body.lastName,
          name: req.body.name,
          surname: req.body.surname,
          postIndex: req.body.postIndex,
          region: req.body.region,
          street: req.body.street,
          city: req.body.city,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
        },
      }
    );

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to add address",
    });
  }
};

export const getAllFavorites = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");

  try {
    const user = await UserModel.findById(userId);

    const favorites = await CardModel.find({
      _id: {
        $in: user.favorites,
      },
    });

    res.status(200).json({
      success: true,
      cards: favorites,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get favorites",
    });
  }
};

export const addToFavorites = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");
  const { cardId } = req.body;

  try {
    const user = await UserModel.findById(userId);
    const alreadyAdded = user.favorites.find((id) => id.toString() === cardId);

    if (alreadyAdded) {
      await UserModel.findByIdAndUpdate(
        userId,
        {
          $pull: { favorites: cardId },
        },
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: "Card has been removed from favorites",
      });
    } else {
      await UserModel.findByIdAndUpdate(
        userId,
        {
          $push: { favorites: cardId },
        },
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: "Card has been added to favorites",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to add card to favorites",
    });
  }
};

export const getBasket = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");

  try {
    const user = await UserModel.findById(userId);

    const basketCards = await CardModel.find({
      _id: {
        $in: user.basket,
      },
    });

    res.status(200).json({
      success: true,
      cards: basketCards,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get cards from basket",
    });
  }
};

export const addToBasket = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");
  const { cardId, type } = req.body;

  try {
    const user = await UserModel.findById(userId);
    const alreadyAdded = user.basket.find((id) => id.toString() === cardId);

    if (type === "add") {
      if (alreadyAdded) {
        return res.json({
          message: "Card already in basket",
        });
      } else {
        await UserModel.findByIdAndUpdate(
          userId,
          {
            $push: { basket: cardId },
          },
          { new: true }
        );

        res.status(200).json({
          success: true,
          message: "Card has been added to basket",
        });
      }
    } else {
      await UserModel.findByIdAndUpdate(
        userId,
        {
          $pull: { basket: cardId },
        },
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: "Card has been removed from basket",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to add card to basket",
    });
  }
};

export const cleanUpBasket = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");
  const { cost, productsNames, productsImages } = req.body;
  try {
    await UserModel.findByIdAndUpdate(userId, {
      $set: {
        basket: [],
      },
      $push: {
        orders: { cost, productsNames, productsImages },
      },
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to clean up  basket",
    });
  }
};

export const getOrders = async (req, res) => {
  const userId = req.params.id.replace(/:/, "");
  try {
    const user = await UserModel.findById(userId);
    res.status(200).json({
      success: true,
      orders: user.orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to orders",
    });
  }
};
