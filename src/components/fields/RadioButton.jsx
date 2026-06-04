function RadioField({
  field,
  value,
  onChange,
  error,
}) {
  return (
    <div className="field-group">

      <label className="field-label">
        {field.label}
      </label>

      <div className="option-group">

        {field.options.map((option)=>(
          <div
            className="option-item"
            key={option}
          >
            <input
              type="radio"
              name={field.name}
              value={option}
              checked={value === option}
              onChange={(e)=>
                onChange(
                  field.name,
                  e.target.value
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

export default RadioField;