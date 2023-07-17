interface ButtonProps {
  children: any;
  onClick?: () => void;
  type?: "submit" | "button";
  className?: string;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-intensewhite text-2xl rounded-md">
      {children}
    </button>
  )
}

export default Button
