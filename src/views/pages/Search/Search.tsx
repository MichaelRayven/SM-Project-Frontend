import {default as SearchComponent} from "@/views/components/Search"
import "./Search.scss"

type Props = {}

export const Search = (props: Props) => {
	return (
		<div className="search-page container">
			<SearchComponent className="search-page__search" />
		</div>
	)
}