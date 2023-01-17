import React from "react"
import Logo from "../../assets/logo.svg"
import Button from "../Button"
import Icon from "../Icon"
import NavBar from "../NavBar"
import SearchBar from "../SearchBar"
import "./Header.scss"

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo">
          <img src={Logo} alt="" />
          <h1 className="logo__text">S&M</h1>
        </div>
        <NavBar className="header__navbar"></NavBar>
        <SearchBar />
        <Button>
          <Icon name={"account_circle"} fill />
          Sign In
        </Button>
      </div>
    </header>
  )
}
