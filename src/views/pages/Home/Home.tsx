import Aside from "@/views/layouts/Aside"
import AsideItem from "@/views/components/AsideItem"
import "./Home.scss"
import Feed from "@/views/components/Feed"

export const Home = () => {
	return (
		<div className="container home">
			<section className="home__content">
				<Feed></Feed>
			</section>
			<Aside>
				<AsideItem title="Article title haaaaaaaaaaa" likes={4} comments={19} />
				<AsideItem title="Hi" likes={4} comments={19} />
				<AsideItem title="Hi" likes={4} comments={19} />
				<AsideItem title="Hi" likes={4} comments={19} />
				<AsideItem title="Hi" likes={4} comments={19} />
			</Aside>
		</div>
	)
}