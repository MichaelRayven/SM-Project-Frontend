import { useId, useState } from "react"
import "./Input.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
  defaultValue?: string
	placeholder?: string
	helperText?: string
	label?: string
	type?: string
  endAdornment?: React.ReactNode
  startAdornment?: React.ReactNode
	error?: boolean
	focus?: boolean
	value?: string | number
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
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
	value: outerValue,
	onChange
}: Props) => {
	const id = useId()
	const [value, setValue] = useState(defaultValue)
	const [focused, setFocused] = useState(false)

	const defineInputClassNames = () => {
		let classNames = `${className} app-input`

		if (value.length !== 0) {
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		onChange && onChange(e)
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
						autoFocus={focus}
						onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}
						placeholder={placeholder}
						onChange={handleChange}
						value={outerValue || value}
						className="app-input__field" 
						type={type} 
						id={id}
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
}