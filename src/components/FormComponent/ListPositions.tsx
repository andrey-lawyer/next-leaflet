import { Field } from "formik";

import { accommodations } from "@/data/accommodations";

import "./FormComponent.scss";

export const ListPositions = () => {
  return (
    <>
      <p className="paragraph paragraph-position">Оберіть тип житла</p>
      {accommodations &&
        accommodations.map(({ type }, index) => (
          <label className="radio-label paragraph" key={index}>
            <Field
              className="radio-input"
              type="radio"
              name="accommodation"
              value={type}
            />
            {type}
          </label>
        ))}
    </>
  );
};
