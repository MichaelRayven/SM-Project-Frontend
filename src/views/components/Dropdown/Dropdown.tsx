import DropdownItem from "../DropdownItem"
import "./Dropdown.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  content?: React.ReactElement<typeof DropdownItem>
	listBackground?: string
	open?: boolean
}

export const Dropdown = ({
	className, 
	style,
	content,
	children,
	open,
	listBackground = "rgb(var(--color-neutural))"
}: Props) => {
	return (
		<div className="dropdown">
			<div className="dropdown__content">
				{content}
			</div>
			<ul className="dropdown__list" style={{
				background: listBackground,
				display: open ? "block" : "none"
			}}>
				{children}
			</ul>
		</div>
	)
}