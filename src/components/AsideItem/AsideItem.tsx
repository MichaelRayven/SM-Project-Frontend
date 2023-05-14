import "./AsideItem.scss"

export type Props = {
  title: string
  likes: number
  comments: number
}

export const AsideItem = ({ title, likes, comments }: Props) => {
	return (
		<div className="aside__item">
			<h5 className="aside__link">
				<a href="">{title}</a>
			</h5>
			<div className="statistics">
				<div className="stat">
					<span className="material-symbols-rounded icon">thumb_up</span> {likes}
				</div>
				<div className="stat">
					<span className="material-symbols-rounded icon">comment</span> {comments}
				</div>
			</div>
		</div>
	)
}