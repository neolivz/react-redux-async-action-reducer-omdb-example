import { style } from 'typestyle'
// import { url } from 'csx'

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '#f7f7f7',
	justifyContent: 'center',
	height: '100vh',
	width: '100hh',
	$debugName: 'app-root',
})

export const cardContainer = style({
	alignSelf: 'center',
	display: 'flex',
	justifyContent: 'center',
	flexDirection:'row',
	height: '100%',
	width: '100%',
	$debugName: 'app-card-container',
})
