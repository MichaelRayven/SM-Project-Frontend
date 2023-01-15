import React from "react";
import "./NavItem.scss";

type Props = {
  text: string;
  href?: string
  active?: boolean;
};

export const NavItem = (props: Props) => {
  return (
    <li>
      <a href={props.href} className={props.active ? "nav__link_active" : "nav__link"}>
        {props.text}
      </a>
    </li>
  );
};
