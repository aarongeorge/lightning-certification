import { Lightning, Router, Utils } from '@lightningjs/sdk'

export class Splash extends Lightning.Component {

	static _template () {
		return {
			Background: {
				rect: true,
				w: 1920,
				h: 1080,
				color: 0xfff3f4f6,
			},
			Title: {
				x: 960,
				y: 1080/2,
				mount: 0.5,
				text: {
					text: 'TMDB Lightning Client Demo',
					fontFace: 'Regular',
					fontSize: 64,
					textColor: 0xff111827
				}
			},
			Label: {
				x: 960,
				y: 1000,
				mount: 0.5,
				text: {
					text: '[ press enter to continue ]',
					textColor: 0xff6b7280
				}
			}
		}
	}

	_handleEnter () {
		Router.navigate('movie/upcoming')
	}

	pageTransition () {
		return 'crossfade'
	}
}
