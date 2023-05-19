import googleLogo from "@/assets/ic-google.svg"
import twitterLogo from "@/assets/ic-twitter.svg"
import vkLogo from "@/assets/ic-vk.svg"
import facebookLogo from "@/assets/ic-facebook-square.svg"
import githubLogo from "@/assets/ic-github.svg"
import Button from "@/views/components/Button"
import Input from "@/views/components/Input"
import "./SignUp.scss"
import HideableInput from "@/views/components/HideableInput"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { stringToRegExp } from "@/utility/utils"

export const SignUp = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm()
	const onSubmit = (data: any) => console.log(data)

	return (
		<div className="signup container">
			<div className="signup__top">
				<h6 className="signup__text">Sign up with socials:</h6>
				<div className="signup__socials">
					<img className="signup__icon" src={googleLogo} alt="" />
					<img className="signup__icon" src={twitterLogo} alt="" />
					<img className="signup__icon" src={vkLogo} alt="" />
					<img className="signup__icon" src={facebookLogo} alt="" />
					<img className="signup__icon" src={githubLogo} alt="" />
				</div>
				<p className="highlight_inversion">or</p>
				<h6 className="signup__text">Sign up using email:</h6>
				<form onSubmit={handleSubmit(onSubmit)} className="signup__form">
					<Input 
						{...register("username", {
							required: "Username is required",
							minLength: {
								message: "Username needs to be at least 5 characters long",
								value: 5
							}
						})} 
						className="signup__field" 
						label="Username"
						error={errors.username !== undefined}
						helperText={errors.username?.message as string}
					/>
					<Input 
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: RegExp(/\w+@\w+\.\w{3}$/),
								message: "Please enter a valid email, example: example@gmail.com"
							}
						})} 
						className="signup__field" 
						label="Email" 
						type="email" 
						error={errors.email !== undefined}
						helperText={errors.email?.message as string}
					/>
					<HideableInput 
						{...register("password", {
							required: "Password is required",
							minLength: {
								message: "Password needs to be at least 8 characters long",
								value: 8
							}
						})} 
						className="signup__field" 
						label="Password" 
						error={errors.password !== undefined}
						helperText={errors.password?.message as string}
					/>
					<HideableInput 
						{...register("confirm_password", {
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
						})} 
						className="signup__field" 
						label="Confirm Password" 
						error={errors.confirm_password !== undefined}
						helperText={errors.confirm_password?.message as string}
					/>
					<Button text="Sign up" type="submit" onClick={() => console.log(errors)} />
				</form>
			</div>
			<div className="signup__bottom">
				<h6 className="signup__text">Already registered? <a className="signup__link" href="">Sign into an existing account!</a></h6>
			</div>
		</div>
	)
}

SignUp.displayName = "SignUpPage"