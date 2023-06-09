import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

import axios from "../../../axios";
import { changePassordSchema } from "../../../schemas";
import { togglePasswordReducer } from "../../../helpers/PasswordReducer";

import { Buttons } from "../index";
import { UserPassword } from "../../forms/index";

const UserPasswordBlock = ({ setVisible }) => {
  const [state, dispatch] = useReducer(togglePasswordReducer, {
    old: false,
    new: false,
  });

  const { _id } = useSelector((state) => state.auth.data);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
    resolver: yupResolver(changePassordSchema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    await axios.patch(`/user/password:${_id}`, values);

    setVisible();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="password-data-form">
      <label>New password</label>
      <UserPassword
        {...register("currentPassword")}
        error={Boolean(errors.currentPassword?.message)}
        errorMessage={errors.currentPassword?.message}
        isVisible={state.old}
        setVisible={() => dispatch({ type: "old" })}
        type={state.old ? "text" : "password"}
      />
      <label>Old password</label>
      <UserPassword
        {...register("newPassword")}
        error={Boolean(errors.newPassword?.message)}
        errorMessage={errors.newPassword?.message}
        isVisible={state.new}
        setVisible={() => dispatch({ type: "new" })}
        type={state.new ? "text" : "password"}
      />
      <Buttons disabled={!isValid} setVisible={setVisible} />
    </form>
  );
};

export default UserPasswordBlock;
