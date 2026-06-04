function TextField({
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

      <input
        type={field.type}
        value={value || ""}
        placeholder={field.label}
        className="custom-input"
        onChange={(e)=>
          onChange(
            field.name,
            e.target.value
          )
        }
      />

      {error && (
        <p className="error">
          {error}
        </p>
      )}

    </div>
  );
}

export default TextField;