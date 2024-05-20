import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className,
  type = "button",
  ...props
}) => {
  return (
    <button onClick={onClick} className={className} type={type} {...props}>
      {text}
    </button>
  );
};

export { Button };
