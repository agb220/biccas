interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  isTextArea?: boolean;
}

const Input = ({
  label,
  isTextArea = false,
  className,
  ...props
}: InputProps) => {
  const baseStyles =
    "w-full p-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 outline-none transition-shadow focus:ring-2 focus:ring-[#54BD95]";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-white text-lg font-medium ml-1">{label}</label>
      )}

      {isTextArea ? (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${baseStyles} resize-none ${className || ""}`}
        />
      ) : (
        <input
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className={`${baseStyles} ${className || ""}`}
        />
      )}
    </div>
  );
};

export default Input;
