import { useEffect, useState } from "react"
import "./Search.scss"
import IconButton from "../IconButton"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAutocompleteResultsByTitle } from "./SearchSlice"
import ProgressCircle from "../ProgressCircle"

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
	

	return (
		<div className={`search ${className || ""}`}>
			<input
				className="search__input"
				type="text"
				placeholder="Search..."
				onChange={e => setText(e.target.value)}
				value={text}
			/>
			<IconButton 
				className="search__button_reset"
				icon="close"
				style={{visibility: text.length == 0 ? "hidden" : "visible"}}
				onClick={() => setText("")}
			></IconButton>
			<IconButton icon="search" className="search__button"></IconButton>

			<ul 
				className="search__dropdown"
				style={{visibility: text.length !== 0 ? "visible" : "hidden"}}
			>
				{ autocompleteState == "pending" ?
					<ProgressCircle className="search__progress"/> :
					autocompleteResults.length == 0 ?
						<p className="search__no-result">No Results</p> :
						autocompleteResults.map((item, ind) => 
							<li key={ind}><a className="search__suggestion" href="">{item}</a></li>
						)
				}
			</ul>
		</div>
	)
}