import { useState } from "react"
import logo from "@/assets/logo.svg"
import Button from "@/views/components/Button"
import IconButton from "@/views/components/IconButton"
import Search from "@/views/components/Search"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import NavBar from "@/views/components/NavBar"

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const navigate = useNavigate()

	return (
		<header className="header">
			<div className={`${isMenuOpen ? "header__inner_open" : "header__inner"} container`}>
				<div className="header__top">
					<IconButton icon="menu" className="header__icon-btn" onClick={() => setMenuOpen(!isMenuOpen)}></IconButton>
					<div className="logo" onClick={() => navigate("/home", { replace: true })}>
						<img className="logo__img" src={logo} alt="" />
						<h1 className="logo__text">S&M</h1>
					</div>
					<IconButton icon="search" className="header__icon-btn"></IconButton>
					<IconButton icon="account_circle" className="header__icon-btn"></IconButton>
				</div>
				
				<NavBar></NavBar>
				<Search className="header__search"></Search>
				<Button className="header__login" text="Sign in" icon="account_circle" onClick={() => navigate("/signup", { replace: true })}></Button>
			</div>
		</header>
	)
}