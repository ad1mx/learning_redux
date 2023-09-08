import React from "react";

interface Button {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  sx?: string;
}

const Button: React.FC<Button> = ({ onClick, children, sx }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white rounded-md py-1 px-2 ${sx}`}
    >
      {children}
    </button>
  );
};

export default Button;
