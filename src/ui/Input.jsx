import { Eye, EyeOff } from "lucide-react";

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
  isHiddenPassword = true,
  togglePassword = () => {},
  showToggle = false,
  classname = "",
  ref = null
}) => {
  return (
    <div className="relative">
      {label && <label className="text-white text-sm">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        className={
          "w-full  px-5 py-3 rounded-md border border-[#ccc] text-white placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-white/80 relative " +
          classname
        }
        ref={ref}
      />
      {showToggle && (
        <span
          className="text-gray-500 absolute top-4 right-4 cursor-pointer"
          onClick={() => togglePassword((prev) => !prev)}
        >
          {isHiddenPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      )}
      {error && (
        <p className="text-red-500  font-medium text-sm mt-1 mx-2 transition-all duration-300">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
