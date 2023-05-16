import googleLogo from "@/assets/ic-google.svg"
import twitterLogo from "@/assets/ic-twitter.svg"
import vkLogo from "@/assets/ic-vk.svg"
import facebookLogo from "@/assets/ic-facebook-square.svg"
import githubLogo from "@/assets/ic-github.svg"
import Button from "@/views/components/Button"
import Input from "@/views/components/Input"
import "./SignUp.scss"

export const SignUp = () => {
	return (
		<div className="signup container">
			<div className="signup__top">
				<h6 className="signup__text">Sign up with socials:</h6>
				<div className="signup__socials">
					<img className="signup__icon" src={googleLogo} alt="" />
					<img className="signup__icon" src={twitterLogo} alt="" />
					<img className="signup__icon" src={vkLogo} alt="" />
					<img className="signup__icon" src={facebookLogo} alt="" />
					<img className="signup__icon" src={githubLogo} alt="" />
				</div>
				<p className="highlight_inversion">or</p>
				<h6 className="signup__text">Sign up using email:</h6>
				<form className="signup__form">
					<Input className="signup__field" placeholder="Username"></Input>
					<Input placeholder="Email" type="email"></Input>
					<Input placeholder="Password" type="password"></Input>
					<Input placeholder="Confirm Password" type="password"></Input>
				</form>
				<Button text="Sign up" />
			</div>
			<div className="signup__bottom">
				<h6 className="signup__text">Already registered? <a className="signup__link" href="">Sign into an existing account!</a></h6>
			</div>
		</div>
	)
}

SignUp.displayName = "SignUpPage"