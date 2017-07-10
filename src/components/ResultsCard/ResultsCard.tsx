import * as React from 'react'
import * as style from './ResultsCardStyle'

interface ResultsCardProps {
	result: SearchResult,
	action: string
	onClick: Function,
}

export const ResultsCard: React.StatelessComponent<ResultsCardProps> =
	({ result, action, onClick }) => (
		<div className={style.root}>
			<img src={result.Poster} width={200}/>
			<div>{result.Title}</div>
			<div>{result.Year}</div>
			<button onClick={() => onClick()}>{action}</button>
		</div>
	)
