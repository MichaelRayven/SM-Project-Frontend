export const stringToRegExp = (str: string) => {
	return RegExp(str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"))
}

export const sleep = (ms: number) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export const formatDate = (date: Date) => {
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