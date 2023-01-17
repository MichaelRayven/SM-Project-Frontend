import Icon from "../Icon"
import "./DropdownItem.scss"

type Props = {
  text: string
  icon: string
  className?: string
  style?: React.CSSProperties
}

export const DropdownItem = ({ className, style, icon, text }: Props) => {
  return (
    <div className="dropdown__item">
      <Icon name={icon} />
      <span>{text}</span>
    </div>
  )
}
