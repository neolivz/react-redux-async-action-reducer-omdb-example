import { style } from 'typestyle'

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	$debugName: 'card-holder-root',
	width: '100%',
	backgroundColor: 'rgba(144,164,174,0.5)',
	flexGrow: 1,
})

export const title = style({
	width: '100%',
	height: '2em',
	textAlign: 'center',
	alignSelf: 'center',
	$debugName: 'card-holder-title',
})

export const container = style({
	width: '100%',
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'row',
	$debugName: 'card-holder-container',
	padding: '1em',
	flexWrap: 'wrap',
	overflowY: 'scroll',
	justifyContent: 'space-around',
})
