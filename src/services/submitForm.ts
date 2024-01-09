import { toast } from "react-toastify";
import { postAdvert } from "./api";
import { IActions, IValue } from "../types/typesForForm";
import { Dispatch, SetStateAction } from "react";

export const onSubmitUser = (
  values: IValue,
  position: string[],
  setNameImage: (value: string) => void,
  setText: (value: string) => void,
  actions: IActions,
  setRepeat: Dispatch<SetStateAction<boolean>>
) => {
  const body = new FormData();

  values.photo && body.append("photo", values.photo);
  body.append("accommodation", values.accommodation);
  values.description && body.append("description", values.description);
  values.cost && body.append("cost", values.cost);
  values.phone && body.append("phone", values.phone);
  position.length > 0 && body.append("latitude", position[0]);
  position.length > 0 && body.append("longitude", position[1]);
  position.length > 0 && body.append("place", position[2]);

  const newAdvert = async (body: FormData) => {
    try {
      const data = await postAdvert(body);
      console.log(body);
      if (data) {
        actions.resetForm();
        setNameImage("");
        setText("");
        setRepeat((prevState) => !prevState);
        toast.success("Оголошення успішно додане");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  newAdvert(body);
};
