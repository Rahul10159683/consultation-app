import React from "react";

const VARIANTS = {
  primary:
    "bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 me-2 focus:outline-none focus:ring-2 focus:ring-red-300",
  secondary:
    "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white me-2 focus:outline-none focus:ring-2 focus:ring-gray-300",
  success:
    "bg-green-500 border-2 border-green-500 text-gray-100 hover:bg-green-600 me-2 focus:outline-none focus:ring-2 focus:ring-green-300",
};

const SIZE = {
  xs: "text-xs px-4 py-1",
  sm: "text-xs px-4 py-2",
  md: "text-base px-4 py-2",
  lg: "text-[1.10rem] leading-[1.7rem] px-4 py-2",
  xl: "text-[1.3rem] leading-8 px-4 py-2",
};

const WIDTH = {
  full: "w-full",
  "": "", // Empty string for default width
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  width = "",
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`${VARIANTS[variant]} rounded-md my-1 
      font-normal ${SIZE[size]} ${WIDTH[width]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
