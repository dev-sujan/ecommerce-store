import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
