import "./DropdownItem.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  interactive?: boolean
  disabled?: boolean
}

export const DropdownItem = ({
	className, 
	style,
	children,
	interactive = true,
	disabled
}: Props) => {
	const defineClassNames = () => {
		let classNames = "dropdown__item"

		if (className) {
			classNames += ` ${className}`
		}

		if (interactive) {
			classNames += " dropdown__item_interactive"
		}

		if (disabled) {
			classNames += " dropdown__item_disabled"
		}

		return classNames
	}

	return <div className={defineClassNames()}>{children}</div>
}