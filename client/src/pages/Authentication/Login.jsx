import React from "react";

import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

import { AuthInput } from "../../components/forms";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

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
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          {...register("email", { required: "Enter email" })}
          error={Boolean(errors.email?.message)}
          errorMessage={errors.email?.message}
          type="email"
          label={"EMAIL"}
          placeholder={"EMAIL"}
        />
        <AuthInput
          {...register("password", { required: "Enter password" })}
          error={Boolean(errors.password?.message)}
          errorMessage={errors.password?.message}
          type="text"
          label={"PASSWORD"}
          placeholder={"PASSWORD"}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
