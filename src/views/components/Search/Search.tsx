import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/configs/redux/hooks"
import { fetchAutocompleteResultsByTitle } from "@/services/search/slice"
import IconButton from "@/views/components/IconButton"
import ProgressCircle from "@/views/components/Spinner"
import "./Search.scss"
import Dropdown from "../Dropdown"
import DropdownItem from "../DropdownItem"
import Input from "../Input"

type Props = {
	className?: string
}

export const Search = ({ className }: Props) => {
	const dispatch = useAppDispatch()
	const autocompleteResults = useAppSelector((state) => state.searchSlice.results)
	const autocompleteState = useAppSelector((state) => state.searchSlice.loading)
	const [text, setText] = useState("")

	useEffect(() => {
		const promise = dispatch(fetchAutocompleteResultsByTitle(text))
		
		return () => {
			promise.abort()
		}
	}, [text])

	const renderDropdown = () => {
		switch (autocompleteState) {
		case "pending":
			return (
				<DropdownItem interactive={false} >
					<ProgressCircle className="search__progress"/>
				</DropdownItem>
			)
		case "failed":
			return (
				<DropdownItem interactive={false} >
					<p className="search__no-result">Something went wrong.</p>
				</DropdownItem>
			)
		case "succeeded":
			if (autocompleteResults.length > 0) {
				return (
					autocompleteResults.map((item, ind) => 
						<DropdownItem key={ind}>
							<a className="search__suggestion" href="">{item}</a>
						</DropdownItem>
					)
				)
			} else {
				return (
					<DropdownItem interactive={false} >
						<p className="search__no-result">No Results</p>
					</DropdownItem>
				)
			}
		}
	}

	return (
		<div className={`search ${className || ""}`}>
			<Dropdown
				open={text.length > 0}
				content={
					<Input 
						className="search__input"
						type="text"
						variant="borderless"
						placeholder="Search..."
						onChange={e => setText(e.target.value)}
						value={text}
						endAdornment={<>
							<IconButton 
								className="search__button_reset"
								icon="close"
								style={{visibility: text.length == 0 ? "hidden" : "visible"}}
								onClick={() => setText("")}
							/>
							<IconButton icon="search" className="search__button" />
						</>}
					/>
				}
			>
				{ renderDropdown() }
			</Dropdown>
		</div>
	)
}