import { Lightning, Router } from '@lightningjs/sdk'
import { Image } from './Image'

export const TILE_WIDTH = 480
export const TILE_HEIGHT = 270

export class Tile extends Lightning.Component {
	static _template () {
		return {
			rect: true, color: 0xff00ff00,
			alpha: 0.5,
			w: TILE_WIDTH, h: TILE_HEIGHT,
			Image: {
				type: Image,
				src: this.bindProp('src'),
				w: w => w, h: h => h
			},
			Title: {
				text: {
					// text: this.bindProp('title') ?? 'Title'
				}
			}
		}
	}

	_focus () {
		this.patch({ alpha: 1 })
	}

	_unfocus () {
		this.patch({ alpha: 0.5 })
	}

	_handleEnter () {
		Router.navigate(`movie/${this.itemId}`)
	}
}
