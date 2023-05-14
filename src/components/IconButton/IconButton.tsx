import "./IconButton.scss"

type Props = {
  icon: string
  className?: string
	style?: React.CSSProperties
  onClick?: () => void
}

export const IconButton = ({icon, style, className, onClick}: Props) => {
	return (
		<button 
			className={`icon-button ${className || ""}`}
			style={style}
			onClick={onClick}
		>
			{icon && <span className="material-symbols-rounded icon-button__icon">{icon}</span>}
		</button>
	)
}