import { useState } from "react";

import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import RadioField from "./fields/RadioButton";
import CheckboxField from "./fields/CheckBox";

function FormBuilder({ config }) {

  const [formData, setFormData] =
    useState({});

  const [errors, setErrors] =
    useState({});

  const handleChange = (
    name,
    value
  ) => {

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const validateForm = () => {

    const newErrors = {};

    config.forEach((field) => {

      if (field.required) {

        const value =
          formData[field.name];

        if (
          value === undefined ||
          value === "" ||
          (Array.isArray(value) &&
            value.length === 0)
        ) {

          newErrors[field.name] =
            `${field.label} is required`;

        }
      }
    });

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validateForm())
      return;

    console.log(formData);

    alert(
      "Form submitted successfully"
    );
  };

  const renderField = (field) => {

    switch (field.type) {

      case "text":
      case "email":
      case "password":
      case "date":
        return (
          <TextField
            key={field.name}
            field={field}
            value={
              formData[field.name]
            }
            onChange={
              handleChange
            }
            error={
              errors[field.name]
            }
          />
        );

      case "select":
        return (
          <SelectField
            key={field.name}
            field={field}
            value={
              formData[field.name]
            }
            onChange={
              handleChange
            }
            error={
              errors[field.name]
            }
          />
        );

      case "radio":
        return (
          <RadioField
            key={field.name}
            field={field}
            value={
              formData[field.name]
            }
            onChange={
              handleChange
            }
            error={
              errors[field.name]
            }
          />
        );

      case "checkbox":
        return (
          <CheckboxField
            key={field.name}
            field={field}
            value={
              formData[field.name] ||
              []
            }
            onChange={
              handleChange
            }
            error={
              errors[field.name]
            }
          />
        );

      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      {config.map(renderField)}

      <button
        type="submit"
        className="submit-btn"
      >
        Submit
      </button>
    </form>
  );
}

export default FormBuilder;