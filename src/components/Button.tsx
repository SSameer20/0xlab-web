import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default";
  color?: string;
}

export default function Button({
  children,
  variant = "default",
  color = "#8027c9",
}: ButtonProps) {
  const style = {
    backgroundColor: variant === "default" ? color : undefined,
  };

  return (
    <button
      style={style}
      className="text-white px-4 py-1 rounded cursor-pointer transition duration-300 hover:opacity-80"
    >
      {children}
    </button>
  );
}
