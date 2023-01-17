import React from "react"
import Button from "../Button"
import Icon from "../Icon"
import "./IconButton.scss"

type Props = {
  name: string
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const IconButton = ({ name, className = "", onClick, style }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`button_icon ${className}`}
      style={style}
    >
      <Icon name={name} />
    </button>
  )
}
