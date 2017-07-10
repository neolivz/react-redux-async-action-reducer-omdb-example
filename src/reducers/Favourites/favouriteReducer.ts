import { AsyncStore, createReducer, arrayAsyncLoadReducer, arrayAsyncDeleteReducer, arrayAsyncCreateReducer, initialState }
	from 'redux-async-action-reducer'

// import { handleActions } from 'redux-actions';

import { ADD_MOVIE, REMOVE_MOVIE, LOAD_MOVIES} from '../../constants/actions'

export type FavouriteAPIStore = AsyncStore<SearchResult[]>

export const favouriteReducer = createReducer(initialState,
	[ ],
	[
		arrayAsyncCreateReducer<ADD_MOVIE, SearchResult, SearchResult, SearchResult[]>(ADD_MOVIE),
		arrayAsyncDeleteReducer<REMOVE_MOVIE, SearchResult, SearchResult, SearchResult[]>(REMOVE_MOVIE),
		arrayAsyncLoadReducer<LOAD_MOVIES, undefined, SearchResult[], SearchResult[]>(LOAD_MOVIES),
	]
)

export default favouriteReducer
