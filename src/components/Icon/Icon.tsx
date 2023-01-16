import React from "react"
import "./Icon.scss"

type Props = {
  name: string
  className?: string
  style?: React.CSSProperties
  iconStyle?: "outlined" | "rounded" | "sharp"
  fill?: boolean
}

export const Icon = ({
  name,
  style,
  iconStyle = "rounded",
  fill = false,
  className = "",
}: Props) => {
  return (
    <span
      className={`material-symbols-${iconStyle} ${
        fill ? "icon_filled" : "icon"
      } ${className}`}
      style={style}
    >
      {name}
    </span>
  )
}
