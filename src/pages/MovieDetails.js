import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { Image } from '../components/Image'
import { Carousel } from '../components/Carousel'
import { getImagePath } from '../lib/api'

const CAROUSEL_GAP = 50

export class MovieDetails extends Lightning.Component {

	static _template () {
		return {
			Background: {
				rect: true,
				w: 1920,
				h: 1080,
				color: 0xfff3f4f6,
			},
			Poster: {
				type: Image,
				x: 50,
				y: 50,
				shader: {
					type: Lightning.shaders.RoundedRectangle,
					radius: 8
				},
				w: 480,
				h: 480
			},
			Release: {
				x: 580,
				y: 40,
				text: {
					text: 'Release Date',
					fontFace: 'Regular',
					fontSize: 48,
					textColor: 0xff6b7280
				}
			},
			Title: {
				x: 580,
				y: 100,
				text: {
					text: 'Movie Title',
					fontFace: 'Regular',
					fontSize: 64,
					textColor: 0xff111827
				}
			},
			Overview: {
				x: 580,
				y: 200,
				w: 1290,
				text: {
					text: 'Overview',
					fontFace: 'Regular',
					fontSize: 48,
					textColor: 0xff6b7280
				}
			},
			Similar: {
				type: Carousel,
				y: 1080 * 0.75,
				title: 'Similar'
			}
		}
	}

	_getFocused () {
		return this.tag('Similar')
	}

	_onActive () {
		this.tag('Similar').populateCarousel(this.similars.results)
	}

	_enable () {
		this.patch({
			Title: { text: { text: this.details.title } },
			Release: { text: { text: this.details.release_date.split('-')[0] }},
			Overview: { text: { text: this.details.overview }},
			Poster: { src: getImagePath(this.details, 3) }
		})
	}

	pageTransition () {
		return 'up'
	}
}
