import AuthForm from "@/views/components/AuthForm"
import AuthLinks from "@/views/components/AuthMethods"
import Card from "@/views/components/Card"
import { Link } from "react-router-dom"
import "./SignIn.scss"

export const SignIn = () => {
	return (
		<div className="signin container">
			<Card>
				<div className="signin__content signin__content_top">
					<h6 className="signin__text">Sign in with socials:</h6>
					<AuthLinks></AuthLinks>
					<p className="highlight_inversion">or</p>
					<h6 className="signin__text">Sign in using email:</h6>
					<AuthForm variant="login" />
					<a href=""><h6 className="signin__text_secondary">Forgot your password?</h6></a>
				</div>
			</Card>
			<Card>
				<div className="signin__content signin__content_bottom">
					<h6 className="signin__text">
						Not registered? <Link to="/signup" className="signin__link">Sign up for a new account!</Link>
					</h6>
				</div>
			</Card>
		</div>
	)
}