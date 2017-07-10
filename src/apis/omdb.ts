// import * as localforage from 'localforage'

import { API_KEY } from '../constants/api'

export const fetchMovies = async (searchTerm): Promise<SearchResult[]> => {
	let resp = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
	const data = await resp.json() as {Search: SearchResult[]}
	return data.Search
}

// const sleep = () => {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve()
// 		}, 3000)
// 	})
// 	return promise
// }

export const settings = {
	fetchMovies
}
