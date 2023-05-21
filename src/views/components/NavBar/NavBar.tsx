import { NavBarItem, fetchNavBar } from "@/mock"
import { useEffect, useState } from "react"
import "./NavBar.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
}

export const NavBar = ({className, style}: Props) => {
	const [navBarItems, setNavBarItems] = useState<NavBarItem[]>([])

	useEffect(() => {
		setNavBarItems(fetchNavBar())
	}, [])

	return (
		<nav className="nav">
			<ul className="nav__list">
				{
					navBarItems.map((item) => (
						<li className="nav__item" key={item.id}>
							<a href={item.url} className="nav__link">
								{item.title}
							</a>
						</li>
					))
				}
			</ul>
		</nav>
	)
}