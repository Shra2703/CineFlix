const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  label = "",
  name = "",
  error = "",
  onBlur = () => {},
  onFocus = () => {},
}) => {
  return (
    <div>
      {label && <label className="text-white text-sm">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        className="w-full  px-5 py-3 rounded-md border border-[#ccc] text-white placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-white/80"
      />
      {error && (
        <p className="text-red-500  font-medium text-sm mt-1 mx-2 transition-all duration-300">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
