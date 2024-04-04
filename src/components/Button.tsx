
interface ButtonProps {
    title: string;
    className?: string;
    }

const Button = ({ title, className }: ButtonProps) => {
  return (
    <>
      <button
        className={`inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500 w-44 m-6 ${className}`}
      >
        {title}
      </button>
    </>
  );
};
export default Button