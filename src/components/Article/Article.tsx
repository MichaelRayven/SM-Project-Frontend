import Button from "../Button"
import "./Article.scss"

interface Props {
  author: string
  date: string
  images: string[]
  text: string
  views: number
  likes: number
  comments: number
}

export const Article = ({
	author,
	date,
	images,
	text,
	views,
	likes,
	comments,
}: Props) => {
	return (
		<article className="article">
			<div className="article__meta">
				<span className="material-symbols-rounded icon">account_circle</span>
				<p className="article__author">{author}</p>
				<p className="article__date">{date}</p>
			</div>
			<h5 className="article__heading">Article title</h5>
			{images.length !== 0 && (
				<img src={images[0]} alt="" className="article__gallery" />
			)}
			<p className="article__excerpt">
				{text.length > 810
					? text.slice(0, text.slice(0, 800).lastIndexOf(" ")) + "..."
					: text}
			</p>
			<Button 
				text="Read more" 
				className="article__read-full" />
			<div className="statistics">
				<div className="stat">
					<span className="material-symbols-rounded icon">visibility</span>
					{views}
				</div>
				<div className="stat">
					<span className="material-symbols-rounded icon">thumb_up</span>
					{likes}
				</div>
				<div className="stat">
					<span className="material-symbols-rounded icon">comment</span>
					{comments}
				</div>
			</div>
		</article>
	)
}
