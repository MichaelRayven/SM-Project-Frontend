import { useState } from "react"
import Input from "@/views/components/Input"
import IconButton from "@/views/components/IconButton"
import "./HideableInput.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
  defaultValue?: string
	placeholder?: string
	helperText?: string
	label?: string
  startAdornment?: React.ReactNode
	error?: boolean
	focus?: boolean
	value?: string | number
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	showIcon?: string
	hideIcon?: string
}

export const HideableInput = ({
	className, 
	style,
	label,
	placeholder,
	defaultValue = "",
	startAdornment,
	helperText,
	error,
	focus,
	value,
	onChange,
	showIcon = "visibility",
	hideIcon = "visibility_off"
}: Props) => {
	const [isHidden, setHidden] = useState(true)

	const renderIcon = () => {
		if (isHidden) {
			return <IconButton 
				icon={showIcon}
				className="hideable-input__icon" 
				onClick={() => setHidden(false)}
			/>
		} else {
			return <IconButton 
				icon={hideIcon} 
				className="hideable-input__icon" 
				onClick={() => setHidden(true)}
			/>
		}
	}

	return (
		<Input 
			className={className}
			style={style}
			label={label}
			placeholder={placeholder}
			defaultValue={defaultValue}
			value={value}
			startAdornment={startAdornment}
			endAdornment={renderIcon()}
			helperText={helperText}
			error={error}
			focus={focus}
			onChange={onChange}
			type={isHidden ? "password" : "text"}/>
	)
}