interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}



const Button = ({ title, className, onClick, disabled }: ButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`inline-block shrink-0 rounded-md border border-pink-500 bg-pink-500 px-12 py-3 text-sm font-medium  transition hover:bg-pink-700  w-44 m-6 ${className}`}
      >
        {title}
      </button>
    </>
  );
};
export default Button;
