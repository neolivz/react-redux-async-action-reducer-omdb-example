
import { createAsyncAction } from 'redux-async-action-reducer'

import { fetchMovies as fetchMoviesAPI } from '../apis'
import { FETCH_SEARCH_RESULTS } from '../constants/actions'

export const fetchMovies = createAsyncAction<FETCH_SEARCH_RESULTS, string, SearchResult[]>(FETCH_SEARCH_RESULTS, fetchMoviesAPI)

