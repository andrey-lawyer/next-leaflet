import { Formik, Form, Field, ErrorMessage } from "formik";

import { schema } from "../../services/validation";
import { onSubmitUser } from "../../services/submitForm";
import { onChangeUser } from "../../services/uploadImageForm";

import { IActions, IValue } from "../../types/typesForForm";
import { IFormProps } from "@/types/typeProps";

import { useForm } from "../../hooks/useForm";

import { ListPositions } from "./ListPositions";
import { SearchBox } from "../SearchBox";

import "./FormComponent.scss";

export const FormComponent = ({ setRepeat }: IFormProps) => {
  const {
    setNameImage,
    inputBase,
    nameFile,
    nameImage,
    position,
    setPosition,
    text,
    setText,
  } = useForm();
  return (
    <section id="registration" className="section-task section-form">
      <h2 className="title-form text-xl font-bold">Створити оголошення</h2>
      <Formik
        initialValues={{
          accommodation: "Квартира",
          description: "",
          cost: "",
          phone: "",
          photo: null,
        }}
        validationSchema={schema}
        onSubmit={(values: IValue, actions: IActions) =>
          onSubmitUser(
            values,
            position,
            setNameImage,
            setText,
            actions,
            setRepeat
          )
        }
      >
        {({ values, errors, touched, setFieldValue }) => {
          const { cost, description, phone, photo } = values;
          const notEmpty = cost || description || phone || photo;
          const isError =
            errors.description || errors.cost || errors.photo || errors.phone;

          const onEnabled =
            cost &&
            description &&
            phone &&
            photo &&
            position.length > 0 &&
            !isError;

          return (
            <>
              <Form className="block-form ">
                <div id="my-radio-group" aria-labelledby="my-radio-group">
                  <ListPositions />
                </div>
                <label className="block-form_label">
                  <Field
                    className={
                      errors.description && touched.description
                        ? inputBase + " error"
                        : inputBase + " success"
                    }
                    type="text"
                    name="description"
                    placeholder="Опис житла"
                  />

                  <ErrorMessage
                    className="message message_error"
                    name="description"
                    component="div"
                  />
                </label>
                <label className="block-form_label">
                  <Field
                    className={
                      errors.cost && touched.cost
                        ? inputBase + " error"
                        : inputBase + " success"
                    }
                    type="text"
                    name="cost"
                    placeholder="100"
                  />

                  <ErrorMessage
                    className="message message_error"
                    name="cost"
                    component="div"
                  />
                </label>
                <label className="block-form_label">
                  <Field
                    className={
                      errors.phone && touched.phone
                        ? inputBase + " error"
                        : inputBase + " success"
                    }
                    type="tel"
                    name="phone"
                    placeholder=" +380XXXXXXXXX"
                  />
                  <ErrorMessage
                    className="message message_error"
                    name="phone"
                    component="div"
                  />
                </label>
                <SearchBox
                  text={text}
                  setText={setText}
                  setPosition={setPosition}
                />
                <label
                  htmlFor="photo"
                  className="label-file paragraph block-form_label "
                >
                  <span
                    className={
                      errors.photo && nameImage
                        ? "label-file_upload " + " error-one"
                        : "label-file_upload" + " success-one"
                    }
                  >
                    Upload
                  </span>
                  <span
                    className={
                      errors.photo && nameImage
                        ? nameFile + " error-two"
                        : nameFile + " success-two"
                    }
                  >
                    {nameImage ? nameImage : "Upload your photo"}
                  </span>
                  {errors.photo && nameImage && (
                    <div className="message_photo message_error">
                      {errors.photo}
                    </div>
                  )}
                </label>
                <input
                  className="input-file"
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={(event): void => {
                    onChangeUser(event, setFieldValue, setNameImage);
                  }}
                />

                <button
                  type="submit"
                  disabled={!onEnabled}
                  className={
                    onEnabled
                      ? "button-add" + " enable"
                      : "button-add" + " disable"
                  }
                >
                  Додати оголошення
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </section>
  );
};
