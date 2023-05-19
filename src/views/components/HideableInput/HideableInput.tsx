import { forwardRef, useState } from "react"
import Input from "@/views/components/Input"
import IconButton from "@/views/components/IconButton"
import "./HideableInput.scss"
import { ChangeHandler } from "react-hook-form"

type Props = {
  className?: string
  style?: React.CSSProperties
	error?: boolean
	focus?: boolean
	required?: boolean
  defaultValue?: string
	placeholder?: string
	helperText?: string
  startAdornment?: React.ReactNode
	label?: string
	name?: string
	value?: string | number
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: ChangeHandler
	onFocus?: ChangeHandler
	showIcon?: string
	hideIcon?: string
}

export const HideableInput = forwardRef(function HideableInput({
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
	name,
	required,
	onFocus,
	onBlur,
	onChange,
	showIcon = "visibility",
	hideIcon = "visibility_off",
	...inputProps
}: Props, ref: React.ForwardedRef<HTMLInputElement>) {
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
			ref={ref}
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
			type={isHidden ? "password" : "text"}
			required={required}
			name={name}
			onFocus={onFocus}
			onBlur={onBlur}
			{...inputProps}
		/>
	)
})