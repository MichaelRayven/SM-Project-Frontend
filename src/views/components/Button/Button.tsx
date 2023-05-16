import "./Button.scss"

type Props = {
	text: string,
	icon?: string,
	className?: string,
	onClick?: () => void
}

export const Button = ({text, icon, className, onClick}: Props) => {
	return (
		<button className={`button ${className || ""}`} type="button" onClick={onClick}>
			{icon && <span className="material-symbols-rounded icon">{icon}</span>}
			{text}
		</button>
	)
}
