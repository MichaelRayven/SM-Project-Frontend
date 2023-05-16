import logo from "@/assets/logo.svg"
import "./Footer.scss"

type Props = {
  className?: string
}

export const Footer = ({className}: Props) => {
	return (
		<footer className="footer">
			<div className="footer__inner container">
				<div className="logo footer__logo">
					<img className="logo__img" src={logo} alt="" />
					<h1 className="logo__text">S&M</h1>
				</div>
				<ul className="footer__col">
					<li className="footer__item">
						<h4 className="footer__heading">Account:</h4>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                Sign in
						</a>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                Sign up
						</a>
					</li>
				</ul>
				<ul className="footer__col">
					<li className="footer__item">
						<h4 className="footer__heading">Threads:</h4>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                Programming
						</a>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                Cooking
						</a>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                Design
						</a>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                Marketing
						</a>
					</li>
				</ul>
				<ul className="footer__col">
					<li className="footer__item">
						<h4 className="footer__heading">Contact:</h4>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                example1@email.com
						</a>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
                example2@email.com
						</a>
					</li>
				</ul>
				<ul className="footer__col">
					<li className="footer__item">
						<h4 className="footer__heading">Socials:</h4>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
							<span className="material-symbols-rounded icon">close</span>{" "}
                Twitter
						</a>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
							<span className="material-symbols-rounded icon">close</span>{" "}
                Twitter
						</a>
					</li>
					<li className="footer__item">
						<a href="" className="footer__link">
							<span className="material-symbols-rounded icon">close</span>{" "}
                Twitter
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}