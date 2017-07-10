import { AsyncStore, createReducer, asyncReducer, initialState }
	from 'redux-async-action-reducer'

// import { handleActions } from 'redux-actions';

import { FETCH_SEARCH_RESULTS } from '../../constants/actions'

export type SearchResultsAPIStore = AsyncStore<SearchResult[]>

export const searchReducer = createReducer(initialState,
	[],
	[
		asyncReducer(FETCH_SEARCH_RESULTS),
	]
)

export default searchReducer