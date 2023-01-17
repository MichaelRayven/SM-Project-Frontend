import DropdownItem from "../DropdownItem"
import "./Dropdown.scss"

type Item = {
  icon: string
  text: string
}

type Props = {
  className?: string
  style?: React.CSSProperties
  items: Item[]
}

export const Dropdown = ({ className = "", style, items }: Props) => {
  return (
    <div className={`dropdown ${className}`} style={style}>
      {items.map((item, i) => (
        <DropdownItem icon={item.icon} text={item.text} key={i} />
      ))}
    </div>
  )
}
