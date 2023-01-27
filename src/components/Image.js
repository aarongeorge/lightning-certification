import { Lightning } from '@lightningjs/sdk'

const DEFAULT_IMAGE_WIDTH = 300
const DEFAULT_IMAGE_HEIGHT = 150

export class Image extends Lightning.Component {
	static _template () {
		return {
			w: DEFAULT_IMAGE_WIDTH,
			h: DEFAULT_IMAGE_HEIGHT,
			Fallback: { rect: true, color: 0xffff00ff, w: w => w, h: h => h },
			Image: { w: w => w, h: h => h, src: this.bindProp('src') }
		}
	}

	_init () {
		this.tag('Image').on('txLoaded', () => {
			this.patch({ Fallback: { visible: false } })
		})
	}
}
