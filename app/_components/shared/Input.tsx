interface InputProps {
  label: string;
  placeholder?: string;
  isTextArea?: boolean;
  name?: string;
  rows?: number;
}

const Input = ({
  label,
  placeholder,
  isTextArea = false,
  name,
  rows = 4,
}: InputProps) => {
  const baseStyles =
    "w-full p-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 outline-none transition-shadow focus:ring-2 focus:ring-blue-500/20";

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-white text-lg font-medium ml-1">{label}</label>

      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          className={`${baseStyles} resize-none`}
        />
      ) : (
        <input
          type="email"
          name={name}
          placeholder={placeholder}
          className={baseStyles}
        />
      )}
    </div>
  );
};

export default Input;
