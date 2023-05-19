import { forwardRef, useId, useState } from "react"
import { ChangeHandler } from "react-hook-form"
import "./Input.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
	error?: boolean
	focus?: boolean
	required?: boolean
  defaultValue?: string
	placeholder?: string
	helperText?: string
  endAdornment?: React.ReactNode
  startAdornment?: React.ReactNode
	label?: string
	type?: string
	name?: string
	value?: string | number
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: ChangeHandler
	onFocus?: ChangeHandler
}

export const Input = forwardRef(function Input({
	className, 
	style,
	label,
	placeholder,
	type = "text",
	defaultValue = "",
	startAdornment,
	endAdornment,
	helperText,
	error,
	focus,
	value,
	name,
	required,
	onFocus,
	onBlur,
	onChange,
	...inputProps
}: Props, ref: React.ForwardedRef<HTMLInputElement>) {
	const id = useId()
	const [focused, setFocused] = useState(false)
	const [active, setActive] = useState(false)

	const defineInputClassNames = () => {
		let classNames = `${className} app-input`

		if (active) {
			classNames += " app-input_active"
		}

		if (focused) {
			classNames += " app-input_focused"
		}

		if (error) {
			classNames += " app-input_error"
		}

		if (!label) {
			classNames += " app-input_no-label"
		}

		return classNames
	}

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		onFocus && onFocus(e)
		setFocused(true)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		onBlur && onBlur(e)
		setFocused(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e)
		setActive(e.target.value.length !== 0)
	}

	return (
		<div className={defineInputClassNames()} style={style}>
			<div className="app-input__inner">
				<label className="app-input__label" htmlFor={id}>{label}</label>
				<div className="app-input__wrapper">
					<div className="app-input__content">
						{startAdornment}
					</div>
					<input 
						className="app-input__field" 
						autoFocus={focus}
						required={required}
						defaultValue={defaultValue}
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChange={handleChange}
						placeholder={placeholder}
						value={value}
						type={type} 
						name={name}
						ref={ref}
						id={id}
						{...inputProps}
					/>
					<div className="app-input__content">
						{endAdornment}
					</div>
				</div>
				<fieldset className="app-input__fieldset">
					<legend className="app-input__legend">
						&#8203;{label}
					</legend>
				</fieldset>
			</div>
			<div className="app-input__helper-text">
				{helperText}
			</div>
		</div>
	)
})