// ** React Imports
import { Navigate, Route, RouteObject, createRoutesFromElements } from "react-router-dom"
import { lazy } from "react"

// ** Page Layout
import Layout from "@/views/layouts/Default"

// ** Default Route
const defaultRoute = "/home"

const Home = lazy(() => import("@/views/pages/Home"))
const SignUp = lazy(() => import("@/views/pages/SignUp"))
const SignIn = lazy(() => import("@/views/pages/SignIn"))
const Search = lazy(() => import("@/views/pages/Search"))
const NotFoundPage = lazy(() => import("@/views/pages/Error"))

const routes: RouteObject[] = createRoutesFromElements(
	<Route path='/' element={<Layout />} errorElement={<NotFoundPage />}>
		<Route index path='home' element={<Home />} />
		<Route path='search' element={<Search />} />
		<Route path='signup' element={<SignUp />} />
		<Route path='signin' element={<SignIn />} />
		<Route path='/' element={<Navigate to={defaultRoute} replace />} />
		<Route path='*' element={<NotFoundPage />} />
	</Route>
)



export { defaultRoute, routes }