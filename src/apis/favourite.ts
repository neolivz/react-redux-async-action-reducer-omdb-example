import * as localforage from 'localforage'
import { STORE_KEY } from '../constants/api'

export const addMovie = async (searchResult: SearchResult): Promise<SearchResult> => {
	let storedResults: SearchResult[] = await localforage.getItem(STORE_KEY) as SearchResult[] || []
	storedResults.push(searchResult)
	await localforage.setItem(STORE_KEY, storedResults)
	return searchResult
}

export const removeMovie = async (searchResult: SearchResult): Promise<SearchResult> => {
	let storedResults: SearchResult[] = await localforage.getItem(STORE_KEY) as SearchResult[] || []
	storedResults = [...storedResults.slice(0, storedResults.indexOf(searchResult)),
		...storedResults.slice(storedResults.indexOf(searchResult), storedResults.length)]
	await localforage.setItem(STORE_KEY, storedResults)
	return searchResult
}

export const loadMovies = async (): Promise<SearchResult[]> => {
	let storedResults: SearchResult[] = await localforage.getItem(STORE_KEY) as SearchResult[] || []
	return storedResults
}

// const sleep = () => {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve()
// 		}, 3000)
// 	})
// 	return promise
// }

export const favourite = {
	addMovie, removeMovie, loadMovies
}
