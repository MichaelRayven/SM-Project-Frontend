import { Outlet } from "react-router-dom"
import Header from "@/views/components/Header"
import Footer from "@/views/components/Footer"
import "./Default.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
}

export const Default = ({className, style}: Props) => {
	return (
		<div className="layout">
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}