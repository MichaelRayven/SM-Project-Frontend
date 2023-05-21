import AuthForm from "@/views/components/AuthForm"
import AuthLinks from "@/views/components/AuthMethods"
import Card from "@/views/components/Card"
import "./SignUp.scss"
import { Link } from "react-router-dom"

export const SignUp = () => {
	return (
		<div className="signup container">
			<Card>
				<div className="signup__content signup__content_top">
					<h6 className="signup__text">Sign up with socials:</h6>
					<AuthLinks></AuthLinks>
					<p className="highlight_inversion">or</p>
					<h6 className="signup__text">Sign up using email:</h6>
					<AuthForm variant="register" />
				</div>
			</Card>
			<Card>
				<div className="signup__content signup__content_bottom">
					<h6 className="signup__text">
						Already registered? <Link to="/signin" className="signup__link">Sign into an existing account!</Link>
					</h6>
				</div>
			</Card>
		</div>
	)
}

SignUp.displayName = "SignUpPage"
