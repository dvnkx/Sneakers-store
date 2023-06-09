import * as yup from "yup";
import { parseDateString } from "./helpers/ParseDate";

const today = new Date();

const URIRegExp =
  /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registrSchema = yup.object().shape({
  avatarUrl: yup.lazy((value) =>
    /^data/.test(value)
      ? yup
          .string()
          .trim()
          .matches(URIRegExp, "Must be a valid data URI")
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
  birthday: yup
    .date()
    .transform(parseDateString)
    .max(today, `Date must be earlier ${today.toString().slice(10, 15)}`)
    .optional(),
});

export const addressSchema = yup.object().shape({
  lastName: yup
    .string()
    .required("No last name provided.")
    .min(2, "Last name is too short - should be 2 chars minimum."),
  name: yup
    .string()
    .required("No name provided.")
    .min(2, "Name is too short - should be 2 chars minimum."),
  surname: yup
    .string()
    .required("No surname provided.")
    .min(2, "Surname is too short - should be 2 chars minimum."),
  postIndex: yup
    .number()
    .required("No post index provided.")
    .min(3, "Post index is too short."),
  region: yup.string().required("No region provided."),
  street: yup.string().required("No street provided."),
  city: yup.string().required("No city provided."),
  phoneNumber: yup
    .string()
    .required("No phone number provided.")
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Phone number is too short"),
  email: yup.string().email().required("No email provided."),
});

export const changePassordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("No current password provided")
    .min(8, "Password is too short - should be 8 chars minimum."),
  newPassword: yup
    .string()
    .required("No current password provided")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .notOneOf(
      [yup.ref("currentPassword"), null],
      "Passwords should not be equal"
    ),
});
