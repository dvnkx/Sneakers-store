import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import { selectIsAuth, fetchRegistr } from "../../redux/slices/auth";

import { AuthInput } from "../../components/forms/index";

export const Registartion = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegistr(values));

    if (!data.payload) {
      return alert("Authenticate failed");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          {...register("fullName", { required: "Enter full name" })}
          error={Boolean(errors.fullName?.message)}
          errorMessage={errors.fullName?.message}
          label={"FULL NAME"}
          type="text"
          placeholder={"FULL NAME"}
        />
        <AuthInput
          {...register("email", { required: "Enter email" })}
          error={Boolean(errors.email?.message)}
          errorMessage={errors.email?.message}
          label={"EMAIL"}
          type="email"
          placeholder={"EMAIL"}
        />
        <AuthInput
          {...register("password", { required: "Enter password" })}
          error={Boolean(errors.password?.message)}
          errorMessage={errors.password?.message}
          label={"PASSWORD"}
          type="password"
          placeholder={"PASSWORD"}
        />
        <button disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registartion;
