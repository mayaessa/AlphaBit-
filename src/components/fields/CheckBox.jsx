function CheckboxField({
  field,
  value = [],
  onChange,
  error,
}) {

  const handleCheckboxChange = (
    option
  ) => {

    let updatedValues;

    if (
      value.includes(option)
    ) {
      updatedValues =
      value.filter(
        (item)=>
          item !== option
      );
    } else {

      updatedValues = [
        ...value,
        option
      ];
    }

    onChange(
      field.name,
      updatedValues
    );
  };

  return (
    <div className="field-group">

      <label className="field-label">
        {field.label}
      </label>

      <div className="option-group">

        {field.options.map((option)=>(
          <div
            key={option}
            className="option-item"
          >

            <input
              type="checkbox"
              checked={
                value.includes(option)
              }
              onChange={()=>
                handleCheckboxChange(
                  option
                )
              }
            />

            {" "}
            {option}

          </div>
        ))}

      </div>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

    </div>
  );
}

export default CheckboxField;