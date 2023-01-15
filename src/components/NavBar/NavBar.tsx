import React from "react";
import NavItem from "../NavItem";
import "./NavBar.scss";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem text={"Programming"}></NavItem>
        <NavItem text={"Cooking"}></NavItem>
        <NavItem text={"Design"}></NavItem>
        <NavItem text={"Marketing"}></NavItem>
      </ul>
    </nav>
  );
};
