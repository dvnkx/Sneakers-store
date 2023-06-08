import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./styles.css";

import { UserInput } from "../../forms/index";
import { Buttons } from "../index";

import { yupResolver } from "@hookform/resolvers/yup";
import { editDataSchema } from "../../../schemas";

const UserDataBlock = ({ setVisible }) => {
  const { fullName, email } = useSelector((state) => state.auth.data);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: fullName,
      email: email,
      birthday: "2023-01-01",
    },
    resolver: yupResolver(editDataSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    setVisible(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-data-form">
      <UserInput
        {...register("fullName")}
        type={"text"}
        section={"Full Name"}
        error={Boolean(errors.fullName?.message)}
        errorMessage={errors.fullName?.message}
      />
      <UserInput
        error={Boolean(errors.email?.message)}
        errorMessage={errors.email?.message}
        {...register("email")}
        type={"text"}
        section={"Email"}
      />
      <UserInput
        {...register("birthday")}
        type={"date"}
        section={"Birthday"}
        error={Boolean(errors.birthday?.message)}
        errorMessage={errors.birthday?.message}
      />
      <Buttons setVisible={setVisible} />
    </form>
  );
};

export default UserDataBlock;
