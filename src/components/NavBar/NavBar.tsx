import React from "react"
import NavItem from "../NavItem"
import "./NavBar.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
}

export const NavBar = ({ className = "", style }: Props) => {
  return (
    <nav className={`nav ${className}`} style={style}>
      <ul className="nav__list">
        <NavItem text={"Programming"} active></NavItem>
        <NavItem text={"Cooking"}></NavItem>
        <NavItem text={"Design"}></NavItem>
        <NavItem text={"Marketing"}></NavItem>
      </ul>
    </nav>
  )
}
