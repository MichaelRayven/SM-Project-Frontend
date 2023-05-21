import { ReactElement } from "react"
import { Props as ItemProps } from "@/views/components/AsideItem/AsideItem"
import "./Aside.scss"

type Props = {
	children?: ReactElement<ItemProps> | Array<ReactElement<ItemProps>>;
}

export const Aside = ({children}: Props) => {
	return (
		<aside className="aside">
			<h4  className="aside__heading">Popular articles</h4>
			{ children }
		</aside>
	)
}