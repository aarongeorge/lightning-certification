import { Lightning, Utils, Settings, Router } from '@lightningjs/sdk'
import { Tile, TILE_WIDTH, } from '../components/Tile'

import { getImagePath } from '../lib/api'

const CAROUSEL_GAP = 50

export class UpcomingMovies extends Lightning.Component {

	static _template () {
		return {
			Background: {
				rect: true,
				w: 1920,
				h: 1080,
				color: 0xffffff00
			},
			Title: {
				x: CAROUSEL_GAP,
				y: 308,
				text: {
					text: 'Upcoming Movies',
					textColor: 0xff000000,
					fontSize: 60
				}
			},
			Carousel: {
				w: 400,
				h: 270,
				mountY: 0.5,
				y: 1080 / 2,
				x: CAROUSEL_GAP,
				// rect: true,
				// color: 0xff00ff00,
				flex: {
					direction: 'row',
					justifyContent: 'space-between',
				}
			}
		}
	}

	_init () {
    	this.index = 0
	}

	_handleKey () {}

	getTiles () {
		return this.tag('Carousel').children
	}

	_getFocused () {
		debugger
		const tiles = this.getTiles()
		const focused = tiles[this.index]
		return focused
	}

	_handleEnter () {
		Router.navigate(`movie/${this.upcomingMovies.results[Math.random() * 5 | 0].id}`)
	}

	_firstActive () {
		this.populateUpcomingMovies()
	}

	populateUpcomingMovies () {
		this.tag('Carousel').patch({
			w: this.upcomingMovies.results.length * (TILE_WIDTH + CAROUSEL_GAP),
			children: this.upcomingMovies.results.map(movie => ({
				CarouselItem: {
					type: Tile,
					src: getImagePath(movie),
					title: movie.title
				}
			}))
		})
	}

	_handleLeft () {
		if (this.index > 0) this.index--
	}

	_handleRight () {
		if (this.index < this.getTiles().length - 1) this.index++
	}

}
