import { Lightning, Router } from '@lightningjs/sdk'
import { Image } from './Image'

export const TILE_WIDTH = 480
export const TILE_HEIGHT = 270

export class Tile extends Lightning.Component {
	static _template () {
		return {
			alpha: 0.7,
			Image: {
				type: Image,
				src: this.bindProp('src'),
				w: TILE_WIDTH, h: TILE_HEIGHT,
				shader: {
					type: Lightning.shaders.RoundedRectangle,
					radius: 8
				},
			},
			Title: {
				color: 0xff000000,
				y: TILE_HEIGHT,
				text: {
					textOverflow: 'ellipsis',
					wordWrapWidth: TILE_WIDTH,
					wordWrap: false,
					text: this.bindProp('title') ?? 'Title',
				}
			},
			Release: {
				color: 0xff6b7280,
				y: TILE_HEIGHT + 40,
				text: {
					text: this.bindProp('releaseDate') ?? 'Release Date'
				}
			}
		}
	}

	_focus () {
		this.patch({ alpha: 1 })
	}

	_unfocus () {
		this.patch({ alpha: 0.7 })
	}

	_handleEnter () {
		Router.navigate(`movie/${this.itemId}`)
	}
}
