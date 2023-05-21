import "./Card.scss"

type Props = {
  borderRadius?: number
  background?: string
  elevation?: number
  padding?: number
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const Card = ({
	borderRadius = 8,
	background = "rgb(var(--color-neutural))",
	elevation = 8,
	padding = 8,
	className, 
	style,
	children
}: Props) => {

	const computeShadow = () => {
		const elevationInRem = elevation / 16
		return `${elevationInRem / 4}rem ${elevationInRem / 4}rem ${elevationInRem / 2}rem ${elevationInRem / 4}rem rgba(0, 0, 0, 0.1)`
	}

	return (
		<div 
			className={`card ${className}`}
			style={{
				borderRadius: `${borderRadius / 16}rem`,
				boxShadow: computeShadow(),
				padding: `${padding / 16}rem`,
				background,
				...style
			}}
		>
			{ children }
		</div>
	)
}