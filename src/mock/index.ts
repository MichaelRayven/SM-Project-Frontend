import { sleep } from "@/utility/utils"
import placeholder from "@/assets/blank.png"

export type ArticleSnippet = {
  url: string
  snippet: string
  title: string
  statistics: Stats
  date: Date
  author: User
	gallery?: string[]
}

type Article = {
  content: string
  title: string
  url: string
  statistics: Stats
  date: Date
  author: User
  comments: Comment[]
}

type Stats = {
  views?: number
  likes?: number
  comments?: number
}

type Comment = {
  author: User
  text: string
  statistics: Stats
  date: Date
  repliesTo?: Comment
}

type User = {
  avatarUrl: string
  about: string
  name: string
  url: string
  date: Date
}

export const fetchArticles = (): ArticleSnippet[] => {
	sleep(500)
	return [
		{
			url: "/1154987",
			snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. Sed augue lacus viverra vitae congue eu consequat. Sapien faucibus et molestie ac feugiat sed lectus. Mattis aliquam faucibus purus in massa tempor nec feugiat. Suscipit adipiscing bibendum est ultricies. Ipsum dolor sit amet consectetur adipiscing elit ut. Vehicula ipsum a arcu cursus. Hac habitasse platea dictumst vestibulum rhoncus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Suscipit adipiscing bibendum est ultricies. Mattis enim ut tellus elementum sagittis vitae et leo duis. Purus faucibus ornare suspendisse sed. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Scelerisque eleifend donec pretium vulputate sapien. Tempor orci dapibus ultrices in iaculis nunc sed augue. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Dui vivamus arcu felis bibendum ut tristique. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.",
			date: new Date(1684676045123),
			statistics: {
				likes: 1203,
				comments: 123123,
				views: 12313
			},
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			author: {
				about: "pretium lectus quam id leo in vitae turpis massa sed",
				avatarUrl: "/1154987",
				name: "splitlowly",
				date: new Date(1132704324),
				url: "/splitlowly"
			},
			gallery: [placeholder]
		},
		{
			url: "/1154987",
			snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. Sed augue lacus viverra vitae congue eu consequat. Sapien faucibus et molestie ac feugiat sed lectus. Mattis aliquam faucibus purus in massa tempor nec feugiat. Suscipit adipiscing bibendum est ultricies. Ipsum dolor sit amet consectetur adipiscing elit ut. Vehicula ipsum a arcu cursus. Hac habitasse platea dictumst vestibulum rhoncus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Suscipit adipiscing bibendum est ultricies. Mattis enim ut tellus elementum sagittis vitae et leo duis. Purus faucibus ornare suspendisse sed. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Scelerisque eleifend donec pretium vulputate sapien. Tempor orci dapibus ultrices in iaculis nunc sed augue. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Dui vivamus arcu felis bibendum ut tristique. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.",
			date: new Date(1684576045123),
			statistics: {
				likes: 1203,
				comments: 123123,
				views: 12313
			},
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			author: {
				about: "pretium lectus quam id leo in vitae turpis massa sed",
				avatarUrl: "/1154987",
				name: "splitlowly",
				date: new Date(1132704324),
				url: "/splitlowly"
			}
		},
		{
			url: "/1154987",
			snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. Sed augue lacus viverra vitae congue eu consequat. Sapien faucibus et molestie ac feugiat sed lectus. Mattis aliquam faucibus purus in massa tempor nec feugiat. Suscipit adipiscing bibendum est ultricies. Ipsum dolor sit amet consectetur adipiscing elit ut. Vehicula ipsum a arcu cursus. Hac habitasse platea dictumst vestibulum rhoncus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Suscipit adipiscing bibendum est ultricies. Mattis enim ut tellus elementum sagittis vitae et leo duis. Purus faucibus ornare suspendisse sed. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Scelerisque eleifend donec pretium vulputate sapien. Tempor orci dapibus ultrices in iaculis nunc sed augue. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Dui vivamus arcu felis bibendum ut tristique. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.",
			date: new Date(1674576045123),
			statistics: {
				likes: 1203,
				comments: 123123,
				views: 12313
			},
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			author: {
				about: "pretium lectus quam id leo in vitae turpis massa sed",
				avatarUrl: "/1154987",
				name: "splitlowly",
				date: new Date(1132704324),
				url: "/splitlowly"
			}
		}
	]
}

export type NavBarItem = {
	url: string
	title: string
	id: string
}

export const fetchNavBar = (): NavBarItem[] => {
	return [
		{
			title: "Programming",
			url: "/example",
			id: "1"
		},
		{
			title: "Cooking",
			url: "/example",
			id: "2"
		},
		{
			title: "Design",
			url: "/example",
			id: "3"
		},
		{
			title: "Marketing",
			url: "/example",
			id: "4"
		},
	]
}