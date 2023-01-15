import React from "react";

type Props = {
  name: string;
  style?: "outlined" | "rounded" | "sharp";
  fill?: boolean;
};

export const Icon = ({ name, style = "outlined", fill = false }: Props) => {
  return (
    <span
      className={`material-symbols-${style} 
      ${fill ? "icon_filled" : "icon"}`}
    >
      {name}
    </span>
  );
};
