import { combineReducers } from 'redux'

import {favouriteReducer as favourites, FavouriteAPIStore } from './Favourites'
import {searchReducer as searchResults, SearchResultsAPIStore } from './SearchResults'

export interface RootState {
	favourites: FavouriteAPIStore
	searchResults: SearchResultsAPIStore
}

export {
	FavouriteAPIStore,
	SearchResultsAPIStore
}

export default combineReducers<RootState>({
	favourites,
	searchResults
})
