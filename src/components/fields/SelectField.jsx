function SelectField({
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

      <select
        className="custom-select"
        value={value || ""}
        onChange={(e)=>
          onChange(
            field.name,
            e.target.value
          )
        }
      >
        <option value="">
          Select...
        </option>

        {field.options.map((option)=>(
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

    </div>
  );
}

export default SelectField;