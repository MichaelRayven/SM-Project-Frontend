import "./Button.scss"

type Props = {
	text: string,
	icon?: string,
	type?: "button" | "submit" | "reset"
	className?: string,
	onClick?: () => void
}

export const Button = ({text, icon, className, onClick, type = "button"}: Props) => {
	return (
		<button className={`button ${className || ""}`} type={type} onClick={onClick}>
			{icon && <span className="material-symbols-rounded icon">{icon}</span>}
			{text}
		</button>
	)
}
