import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    birthday: Number,
    deliveryAddress: {
      lastName: String,
      name: String,
      surname: String,
      postIndex: Number,
      region: String,
      street: String,
      city: String,
      phoneNumber: String,
      email: String,
    },
    favorites: [String],

    basket: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
