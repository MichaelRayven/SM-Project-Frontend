import { useState } from "react"
import Logo from "../../assets/logo.svg"
import Button from "../Button"
import Icon from "../Icon"
import IconButton from "../IconButton"
import NavBar from "../NavBar"
import SearchBar from "../SearchBar"
import "./Header.scss"

type Props = {}

export const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__top">
          <a href="#">
            <div className="logo">
                <img src={Logo} alt="" />
                <h1 className="logo__text">S&M</h1>
            </div>
          </a>
          <IconButton 
            className="header__menu" 
            name="menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></IconButton>
        </div>
        <div className={"header__dropdown" + (isMenuOpen ? " header__dropdown_open" : "")}>
          <NavBar className="header__navbar"></NavBar>
          <SearchBar />
          <Button>
            <Icon name={"account_circle"} fill />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
