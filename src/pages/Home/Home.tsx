import placeholder from "../../assets/blank.png"
import Article from "../../components/Article"
import Aside from "../../components/Aside"
import AsideItem from "../../components/AsideItem"
import "./Home.scss"

export const Home = () => {
	return (
		<div className="container home">
			<section className="home__content">
				<Article
					author="Username"
					date="today at 4:40pm"
					text="Sniff all the things. Ptracy. Cat dog hate mouse eat string barf pillow no baths hate everything meoooow but i love cuddles but leave fur on owners clothes spit up on light gray carpet instead of adjacent linoleum. Reaches under door into adjacent room meow pretend not to be evil yet chew on cable meowsiers step on your keyboard while you're gaming and then turn in a circle lick the curtain just to be annoying. Claw drapes plop down in the middle where everybody walks so being gorgeous with belly side up or eat and than sleep on your face refuse to drink water except out of someone's glass, walk on keyboard the fat cat sat on the mat bat away with paws. Give attitude knock dish off table head butt cant eat out of my own dish, or sun bathe x so stare at ceiling, but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) Sniff all the things. Ptracy. Cat dog hate mouse eat string barf pillow no baths hate everything meoooow but i love cuddles but leave fur on owners clothes spit up on light gray carpet instead of adjacent linoleum. Reaches under door into adjacent room meow pretend not to be evil yet chew on cable meowsiers step on your keyboard while you're gaming and then turn in a circle lick the curtain just to be annoying. Claw drapes plop down in the middle where everybody walks so being gorgeous with belly side up or eat and than sleep on your face refuse to drink water except out of someone's glass, walk on keyboard the fat cat sat on the mat bat away with paws. Give attitude knock dish off table head butt cant eat out of my own dish, or sun bathe x so stare at ceiling, but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater)"
					images={[placeholder]}
					views={293}
					likes={123}
					comments={19}
				></Article>

				<Article
					author="Username"
					date="today at 4:40pm"
					text="Sniff all the things. Ptracy. Cat dog hate mouse eat string barf pillow no baths hate everything meoooow but i love cuddles but leave fur on owners clothes spit up on light gray carpet instead of adjacent linoleum. Reaches under door into adjacent room meow pretend not to be evil yet chew on cable meowsiers step on your keyboard while you're gaming and then turn in a circle lick the curtain just to be annoying. Claw drapes plop down in the middle where everybody walks so being gorgeous with belly side up or eat and than sleep on your face refuse to drink water except out of someone's glass, walk on keyboard the fat cat sat on the mat bat away with paws. Give attitude knock dish off table head butt cant eat out of my own dish, or sun bathe x so stare at ceiling, but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) Sniff all the things. Ptracy. Cat dog hate mouse eat string barf pillow no baths hate everything meoooow but i love cuddles but leave fur on owners clothes spit up on light gray carpet instead of adjacent linoleum. Reaches under door into adjacent room meow pretend not to be evil yet chew on cable meowsiers step on your keyboard while you're gaming and then turn in a circle lick the curtain just to be annoying. Claw drapes plop down in the middle where everybody walks so being gorgeous with belly side up or eat and than sleep on your face refuse to drink water except out of someone's glass, walk on keyboard the fat cat sat on the mat bat away with paws. Give attitude knock dish off table head butt cant eat out of my own dish, or sun bathe x so stare at ceiling, but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater)"
					images={[placeholder]}
					views={293}
					likes={123}
					comments={19}
				></Article>

				<Article
					author="Username"
					date="today at 4:40pm"
					text="Sniff all the things. Ptracy. Cat dog hate mouse eat string barf pillow no baths hate everything meoooow but i love cuddles but leave fur on owners clothes spit up on light gray carpet instead of adjacent linoleum. Reaches under door into adjacent room meow pretend not to be evil yet chew on cable meowsiers step on your keyboard while you're gaming and then turn in a circle lick the curtain just to be annoying. Claw drapes plop down in the middle where everybody walks so being gorgeous with belly side up or eat and than sleep on your face refuse to drink water except out of someone's glass, walk on keyboard the fat cat sat on the mat bat away with paws. Give attitude knock dish off table head butt cant eat out of my own dish, or sun bathe x so stare at ceiling, but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) Sniff all the things. Ptracy. Cat dog hate mouse eat string barf pillow no baths hate everything meoooow but i love cuddles but leave fur on owners clothes spit up on light gray carpet instead of adjacent linoleum. Reaches under door into adjacent room meow pretend not to be evil yet chew on cable meowsiers step on your keyboard while you're gaming and then turn in a circle lick the curtain just to be annoying. Claw drapes plop down in the middle where everybody walks so being gorgeous with belly side up or eat and than sleep on your face refuse to drink water except out of someone's glass, walk on keyboard the fat cat sat on the mat bat away with paws. Give attitude knock dish off table head butt cant eat out of my own dish, or sun bathe x so stare at ceiling, but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater)"
					images={[placeholder]}
					views={293}
					likes={123}
					comments={19}
				></Article>
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