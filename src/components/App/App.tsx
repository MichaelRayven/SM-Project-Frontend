import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import Home from "../../pages/Home"
import "./App.scss"
import NotFoundPage from "../../pages/Error"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "about",
				async lazy() {
					const { Footer } = await import("../Footer/Footer")
					return { Component: Footer }
				}
			},
			{
				path: "signup",
				async lazy() {
					const { SignUp } = await import("../../pages/SignUp/SignUp")
					return { Component: SignUp }
				}
			},
			{
				path: "*",
				element: <NotFoundPage />
			}
		]
	}
])

function Layout () {
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

export const App = () => {
	return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}
