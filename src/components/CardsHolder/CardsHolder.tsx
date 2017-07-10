import * as React from 'react'
import * as style from './CardsHolderStyle'

interface CardHolderProps {
	title: string
}

export const CardsHolder: React.StatelessComponent<CardHolderProps> = ({ title, children }) => (
	<div className={style.root}>
		<div className={style.title}>{title}</div>
		<div className={style.container}>
			{children}
		</div>
	</div>
)
