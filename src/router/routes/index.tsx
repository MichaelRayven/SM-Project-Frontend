// ** React Imports
import { Navigate, Route, RouteObject, createRoutesFromElements } from "react-router-dom"
import { lazy } from "react"

// ** Page Layout
import Layout from "@/views/layouts/Default"

// ** Default Route
const defaultRoute = "/home"


const Home = lazy(() => import("@/views/pages/Home"))
const SignUp = lazy(() => import("@/views/pages/SignUp"))
const Search = lazy(() => import("@/views/pages/Search"))
const ErrorPage = lazy(() => import("@/views/pages/Error"))

const routes: RouteObject[] = createRoutesFromElements(
	<Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
		<Route index path='home' element={<Home />} />
		<Route path='search' element={<Search />} />
		<Route path='signup' element={<SignUp />} />
		<Route path='/' element={<Navigate to={defaultRoute} replace />} />
		<Route path='*' element={<ErrorPage />} />
	</Route>
)



export { defaultRoute, routes }