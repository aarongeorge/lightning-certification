import { Lightning, Utils, Settings, Router } from '@lightningjs/sdk'
import { Tile, TILE_WIDTH } from '../components/Tile'
import { Carousel } from '../components/Carousel'

const CAROUSEL_GAP = 50

export class UpcomingMovies extends Lightning.Component {

	static _template () {
		return {
			Background: {
				rect: true,
				w: 1920,
				h: 1080,
				color: 0xfff3f4f6
			},
			Carousel: {
				title: 'Upcoming Movies',
				type: Carousel
			}
		}
	}

	_onActive () {
		this.tag('Carousel').populateCarousel(this.upcomingMovies.results)
	}

	_getFocused () {
		return this.tag('Carousel')
	}

	pageTransition () {
		return 'crossfade'
	}
}
