import * as yup from "yup";
import { checkSizeImage } from "./checkImage";

const nameRegexPhone = /^[\+]{0,1}380([0-9]{9})$/;

const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg"];
const FILE_SIZE = 5242880;

export let schema = yup.object().shape({
  description: yup
    .string()
    .required("Опис обов'язковий")
    .min(2, "Опис занадто короткий")
    .max(60, "Опис занадто довгий"),
  cost: yup
    .number()
    .required("Вартість обов'язкова")
    .max(100000, "максимум 100000"),
  phone: yup
    .string()
    .required("Телефон обов'язковий")
    .matches(nameRegexPhone, "Телефон недійсний"),
  photo: yup
    .mixed()
    .required("Фото обов'язкове")
    .test(
      "fileType",
      "Підтримуються формати тільки jpeg фбо jpg",
      (value: any) => SUPPORTED_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      "Розмір файлу занадто великий",
      (value: any) => value.size <= FILE_SIZE
    )
    .test(
      "minSize",
      "Мінімальний розмір зображення повинен бути не менше 70х70",
      (value: any) => {
        return checkSizeImage(value);
      }
    ),
});
