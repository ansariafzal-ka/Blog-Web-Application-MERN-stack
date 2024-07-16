const InputField = ({ type, placeholder, className, id, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`outline-none ${className}`}
      id={id}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default InputField;
