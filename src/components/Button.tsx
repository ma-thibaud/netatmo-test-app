type ButtonProps = {
  title: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

function Button({ title, selected = false, onClick, className }: ButtonProps) {
  const basicStyle = "text-sm py-3 px-10 cursor-pointer rounded transition";
  const selectedStyle = selected
    ? "bg-gray-400 text-white"
    : "border border-gray-400 hover:bg-gray-200";
  const resultStyle = [basicStyle, selectedStyle, className].join(" ");

  return (
    <button className={resultStyle} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
