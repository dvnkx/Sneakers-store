import * as yup from "yup";

export const registrSchema = yup.object().shape({
  avatarUrl: yup.lazy((value) =>
    /^data/.test(value)
      ? yup
          .string()
          .trim()
          .matches(
            /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
            "Must be a valid data URI"
          )
          .required()
      : yup.string().trim().url("Must be a valid URL").optional()
  ),
  fullName: yup
    .string()
    .required("No name provided")
    .min(2, "Name is too short - should be 2 chars minimum."),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const editDataSchema = yup.object().shape({
  fullName: yup
    .string()
    .optional()
    .min(2, "Name is too short - should be 2 chars minimum."),
  email: yup.string().email("Must be a valid email").optional(),
  birthday: yup.date().optional(),
});
