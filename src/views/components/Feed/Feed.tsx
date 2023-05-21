import { ArticleSnippet, fetchArticles } from "@/mock"
import Article from "@/views/components/Article"
import { useEffect, useState } from "react"
import "./Feed.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
}

export const Feed = ({className, style}: Props) => {
	const [articles, setArticles] = useState<ArticleSnippet[]>([])

	const formatDate = (date: Date) => {
		const timePassed = Date.now() - date.getTime()
		const day = 1000 * 60 * 60 * 24
		const month = day * 30
		const year = month * 12

		if (timePassed < day) {
			return `today at ${date.getHours()}:${date.getMinutes()}`
		} else if (timePassed < day * 2) {
			return `yesterday at ${date.getHours()}:${date.getMinutes()}`
		} else if (timePassed < month) {
			return `${Math.round(timePassed  / day)} days ago`
		} else if (timePassed < year) {
			return `${Math.round(timePassed  / month)} moths ago`
		} else {
			return `${Math.round(timePassed  / year)} years ago`
		}
	}

	useEffect(() => {
		setArticles(fetchArticles())
	}, [])

	return (
		<div className="feed">
			{
				articles.map((item, ind) => {
					return <Article
						key={ind}
						author={item.author.name}
						date={formatDate(item.date)}
						text={item.snippet}
						images={item.gallery || []}
						views={item.statistics.views || 0}
						likes={item.statistics.likes || 0}
						comments={item.statistics.comments || 0}
					/>
				})
			}
		</div>
	)
}