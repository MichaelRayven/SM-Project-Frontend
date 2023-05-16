import Button from "@/views/components/Button"
import "./Error.scss"

export const Error = () => {
	return (
		<div className="error-page container">
			<div className="error-page__header">
				<span className="material-symbols-rounded error-page__icon">error</span>
				<h1 className="error-page__heading">404 - Not Found.</h1>
			</div>
			<h3 className="error-page__text">There is nothing to see here, <a className="error-page__link" href="">unless</a>...</h3>
			<Button text="Go Home" className="error-page__button" />
		</div>
	)
}