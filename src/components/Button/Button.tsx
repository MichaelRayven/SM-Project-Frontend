import React from "react";
import "./Button.scss";

type Props = {
  children: React.ReactNode;
};

export const Button = (props: Props) => {
  return <button className="button">{props.children}</button>;
};
