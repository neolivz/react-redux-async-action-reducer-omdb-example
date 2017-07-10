
import { createAsyncAction } from 'redux-async-action-reducer'

import { loadMovies as loadMoviesAPI, removeMovie as removeMovieAPI, addMovie as addMovieAPI } from '../apis'
import { LOAD_MOVIES, ADD_MOVIE, REMOVE_MOVIE } from '../constants/actions'

export const loadMovies = createAsyncAction<LOAD_MOVIES, string, SearchResult[]>(LOAD_MOVIES, loadMoviesAPI)
export const addMovie = createAsyncAction<ADD_MOVIE, SearchResult, SearchResult>(ADD_MOVIE, addMovieAPI)
export const removeMovie = createAsyncAction<REMOVE_MOVIE, SearchResult, SearchResult>(REMOVE_MOVIE, removeMovieAPI)
