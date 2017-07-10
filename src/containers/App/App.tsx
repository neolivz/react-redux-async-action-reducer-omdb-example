import * as React from 'react'

import { RouteComponentProps } from 'react-router'

import SearchPage from '../SearchPage'

export namespace App {
	// Props from the mapStateToProps method
	export interface StateProps {

	}

	// Props from the mapDispatchToProps method
	export interface DispatchProps {

	}

	export interface OwnProps {
		id: string
	}
	export type Props = StateProps & OwnProps & DispatchProps & RouteComponentProps<void>
}

export class App extends React.Component<App.Props, {}> {

	render() {
		return (
			<div>
				<SearchPage/>
			</div>
		)
	}
}

export default App
