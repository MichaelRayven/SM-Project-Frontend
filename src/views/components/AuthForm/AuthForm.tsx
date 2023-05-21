import useJwt, { JwtToken, UserData } from "@/auth/jwt/useJwt"
import { AbilityContext } from "@/utility/context/Can"
import Button from "@/views/components/Button"
import HideableInput from "@/views/components/HideableInput"
import Input from "@/views/components/Input"
import jwtDecode from "jwt-decode"
import { useContext, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import "./AuthForm.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
	variant?: "login" | "register"
}

export const AuthForm = ({
	className, 
	style,
	variant = "login"
}: Props) => {
	// Hooks
	const ability = useContext(AbilityContext)
	const navigate = useNavigate()
	const { login, setToken, setRefreshToken } = useJwt()

	// Component state
	const [error, setError] = useState(false)

	// Form control
	const { register, handleSubmit, watch, formState: { errors, isLoading } } = useForm()
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		login(data)
			.then((response: any) => {
				const data = response.data
				const decoded_token: JwtToken = jwtDecode(data.access)
				const userData: UserData = decoded_token?.user_data
				setToken(data.access)
				setRefreshToken(data.refresh)
				ability.update(userData.ability)
				navigate("/home")
			})
			.catch(() => setError(true))
	}

	const validationSchemas = {
		username: {
			required: "Username is required",
			minLength: {
				message: "Username needs to be at least 5 characters long",
				value: 5
			}
		},
		email: {
			required: "Email is required",
			pattern: {
				value: RegExp(/\w+@\w+\.\w{3}$/),
				message: "Please enter a valid email, example: example@gmail.com"
			}
		},
		password: {
			required: "Password is required",
			minLength: {
				message: "Password needs to be at least 8 characters long",
				value: 8
			}
		},
		confirm_password: {
			required: "Password confirmation is required",
			minLength: {
				message: "Password needs to be at least 8 characters long",
				value: 8
			},
			validate: (val: string) => {
				if (watch("password") != val) {
					return "Your passwords do no match"
				}
			},
		}
	}

	const renderInputs = () => {
		if (variant === "register") {
			return <>
				<Input 
					{...register("username", validationSchemas.username)} 
					className="signup-form__field" 
					label="Username"
					error={errors.username !== undefined}
					helperText={errors.username?.message as string}
				/>
				<Input 
					{...register("email", validationSchemas.email)} 
					className="signup-form__field" 
					label="Email" 
					type="email" 
					error={errors.email !== undefined}
					helperText={errors.email?.message as string}
				/>
				<HideableInput 
					{...register("password", validationSchemas.password)} 
					className="signup-form__field" 
					label="Password" 
					error={errors.password !== undefined}
					helperText={errors.password?.message as string}
				/>
				<HideableInput 
					{...register("confirm_password", validationSchemas.confirm_password)} 
					className="signup-form__field" 
					label="Confirm Password" 
					error={errors.confirm_password !== undefined}
					helperText={errors.confirm_password?.message as string}
				/>
			</>
		} else {
			return <>
				<Input 
					{...register("email", validationSchemas.email)} 
					className="signup-form__field" 
					label="Email" 
					type="email" 
					error={errors.email !== undefined}
					helperText={errors.email?.message as string}
				/>
				<HideableInput 
					{...register("password", validationSchemas.password)} 
					className="signup-form__field" 
					label="Password" 
					error={errors.password !== undefined}
					helperText={errors.password?.message as string}
				/>
			</>
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="signup-form">
			{ error &&
				<div className="signup-form__error">
					Incorrect email or password.
				</div>
			}
			{renderInputs()}
			<Button 
				className="signup-form__submit" 
				text={variant === "register" ? "Sign Up" : "Sign In"}
				type="submit" />
		</form>
	)
}