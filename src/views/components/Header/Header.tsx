import { useState } from "react"
import logo from "@/assets/logo.svg"
import Button from "@/views/components/Button"
import IconButton from "@/views/components/IconButton"
import Search from "@/views/components/Search"
import "./Header.scss"

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	return (
		<header className="header">
			<div className={`${isMenuOpen ? "header__inner_open" : "header__inner"} container`}>
				<div className="header__top">
					<IconButton icon="menu" className="header__icon-btn" onClick={() => setMenuOpen(!isMenuOpen)}></IconButton>
					<div className="logo">
						<img className="logo__img" src={logo} alt="" />
						<h1 className="logo__text">S&M</h1>
					</div>
					<IconButton icon="search" className="header__icon-btn"></IconButton>
					<IconButton icon="account_circle" className="header__icon-btn"></IconButton>
				</div>
				
				<nav className="nav">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="" className="nav__link">
                  Programming
							</a>
						</li>
						<li className="nav__item">
							<a href="" className="nav__link">
                  Cooking
							</a>
						</li>
						<li className="nav__item">
							<a href="" className="nav__link">
                  Design
							</a>
						</li>
						<li className="nav__item">
							<a href="" className="nav__link">
                  Marketing
							</a>
						</li>
					</ul>
				</nav>
				<Search className="header__search"></Search>
				<Button className="header__login" text="Sign in" icon="account_circle"></Button>
			</div>
		</header>
	)
}