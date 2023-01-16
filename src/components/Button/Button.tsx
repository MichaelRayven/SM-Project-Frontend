import React from "react"
import "./Button.scss"

type Props = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, className = "", onClick, style }: Props) => {
  return (
    <button onClick={onClick} className={`button ${className}`} style={style}>
      {children}
    </button>
  )
}
