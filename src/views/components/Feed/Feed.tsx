import { ArticleSnippet, fetchArticles } from "@/mock"
import { formatDate } from "@/utility/utils"
import Article from "@/views/components/Article"
import { useEffect, useState } from "react"
import "./Feed.scss"

type Props = {
  className?: string
  style?: React.CSSProperties
}

export const Feed = ({className, style}: Props) => {
	const [articles, setArticles] = useState<ArticleSnippet[]>([])

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