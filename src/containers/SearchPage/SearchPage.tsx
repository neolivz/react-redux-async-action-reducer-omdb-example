import * as React from 'react'

import * as style from './SearchPageStyles'

import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadMovies, addMovie, removeMovie, fetchMovies} from '../../actions'

import { RootState } from '../../reducers'

import { CardsHolder } from '../../components/CardsHolder'
import { ResultsCard } from '../../components/ResultsCard'

export namespace SearchPage {
	// Props from the mapStateToProps method
	export interface StateProps {
		favourites: SearchResult[]
		searchResults: SearchResult[]
		searchResultsLoading: boolean
	}

	// Props from the mapDispatchToProps method
	export interface DispatchProps {
		loadMovies: Function
		addMovie: Function
		removeMovie: Function
		fetchMovies: Function
	}

	export interface OwnProps {
	}
	export type Props = StateProps & OwnProps & DispatchProps & RouteComponentProps<void>
}

export class SearchPageContainer extends React.Component<SearchPage.Props, {}> {
	componentDidMount() {
		const { loadMovies } = this.props
		loadMovies()
	}
	render() {
		const { fetchMovies, searchResults, favourites, addMovie, removeMovie } = this.props
		return (
			<div className={style.root}>
				<input onChange={(e) => { fetchMovies(e.target.value) }}/>
				<div className={style.cardContainer}>
					<CardsHolder title='Search'>
						{searchResults && searchResults.map(result => (
							<ResultsCard onClick={() => addMovie(result)} key={result.imdbID}
								result={result}
								action='Add to Favourites'
							/>
						))}
					</CardsHolder>
					<CardsHolder title='Favourite'>
						{favourites && favourites.map(result => (
							<ResultsCard onClick={() => removeMovie(result)} key={result.imdbID}
								result={result}
								action='Remove From Favourites'
							/>
						))}
					</CardsHolder>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: RootState, ownProps: SearchPage.Props): SearchPage.StateProps => {
	return { favourites: state.favourites.store,
		searchResults: state.searchResults.store,
		searchResultsLoading: state.searchResults.working,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		loadMovies,
		addMovie,
		removeMovie,
		fetchMovies
	}, dispatch)
}

export default connect<SearchPage.StateProps, SearchPage.DispatchProps, SearchPage.OwnProps>(mapStateToProps, mapDispatchToProps)(SearchPageContainer)
