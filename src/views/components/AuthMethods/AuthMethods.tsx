import facebookLogo from "@/assets/ic-facebook-square.svg"
import githubLogo from "@/assets/ic-github.svg"
import googleLogo from "@/assets/ic-google.svg"
import twitterLogo from "@/assets/ic-twitter.svg"
import vkLogo from "@/assets/ic-vk.svg"
import "./AuthMethods.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
}

export const AuthMethods = ({
	className, 
	style
}: Props) => {
	return (
		<div className={`auth-methods ${className}`} style={style}>
			<a href="">
				<img className="auth-methods__icon" src={googleLogo} alt="" />
			</a>
			<a href="">
				<img className="auth-methods__icon" src={twitterLogo} alt="" />
			</a>
			<a href="">
				<img className="auth-methods__icon" src={vkLogo} alt="" />
			</a>
			<a href="">
				<img className="auth-methods__icon" src={facebookLogo} alt="" />
			</a>
			<a href="">
				<img className="auth-methods__icon" src={githubLogo} alt="" />
			</a>
		</div>
	)
}