import { Lightning, Router } from '@lightningjs/sdk'
import { Tile, TILE_WIDTH } from '../components/Tile'
import { getImagePath } from '../lib/api'

const CAROUSEL_GAP = 50

export class Carousel extends Lightning.Component {
	static _template () {
		return {
			w: 1920 - CAROUSEL_GAP * 2,
			h: 270,
			mountY: 0.5,
			y: 1080 / 2,
			x: CAROUSEL_GAP,
			Title: {
				y: -90,
				text: {
					text: this.bindProp('title'),
					textColor: 0xff111827,
					fontSize: 60
				}
			},
			Reel: {}
		}
	}

	_init () {
		this.index = 0
	}

	_getFocused () { return this.getTiles()[this.index] }

	_handleEnter () {
		Router.navigate(`movie/${this.itemId}`)
	}

	_handleLeft () {
		if (this.index > 0) this.index--

		this.tag('Reel').patch({
			smooth: {
				x: -(this.index * (TILE_WIDTH + CAROUSEL_GAP))
			}
		})
	}

	_handleRight () {
		if (this.index < this.getTiles().length - 1) this.index++

		this.tag('Reel').patch({
			smooth: {
				x: -(this.index * (TILE_WIDTH + CAROUSEL_GAP))
			}
		})
	}

	populateCarousel (items) {
		this.tag('Reel').patch({
			children: items.map((movie, idx) => ({
				type: Tile,
				src: getImagePath(movie, 3),
				title: movie.title,
				releaseDate: movie.release_date.split('-')[0],
				idx,
				itemId: movie.id,
				x: idx * (TILE_WIDTH + CAROUSEL_GAP)
			}))
		})
	}

	getTiles () { return this.tag('Reel').children }
}
