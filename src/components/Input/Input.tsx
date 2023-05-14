import { useEffect, useRef, useState } from "react"
import "./Input.scss"

type Props = {
	className?: string
	helperText?: string
	label?: string
	placeholder?: string
	required?: boolean
	type?: string
	initialValue?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	min?: number
	max?: number
	trailingContent?: string | JSX.Element | JSX.Element[]
	leadingContent?: string | JSX.Element | JSX.Element[]
}

export const Input = ({ 
	helperText, 
	label,
	placeholder, 
	required, 
	type = "text",
	className,
	initialValue = "",
	onChange = () => {},
	min,
	max,
	trailingContent,
	leadingContent
}: Props) => {
	const [value, setValue] = useState(initialValue)
	const [isValid, setIsValid] = useState(true)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setIsValid(inputRef.current?.validity.valid == undefined ? 
			true : inputRef.current?.validity.valid)
	}, [value])

	return (
		<div className={`input ${className || ""} ${isValid ? "" : "input_invalid"}`}>
			<div className={`input__inner ${label ? "" : "input__inner_border"}`}>
				{leadingContent && <div className="input__content_leading">
					{leadingContent}
				</div>}
				<input 
					min={min}
					max={max}
					ref={inputRef}
					type={type}
					value={value} 
					required={required}
					onChange={e => {
						setValue(e.target.value)
						onChange(e)
					}} 
					placeholder={placeholder} 
					className="input__field" />
				{label && <fieldset className="input__fieldset">
					<legend className="input__legend">
						<span>{label}</span>
					</legend>
				</fieldset>}
				{trailingContent && <div className="input__content_trailing">
					{trailingContent}
				</div>}
			</div>
			{helperText && <div className="input__helper-text">{helperText}</div>}
		</div>
	)
}