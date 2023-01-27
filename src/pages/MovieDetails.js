import { Lightning, Utils, Router } from '@lightningjs/sdk'

export class MovieDetails extends Lightning.Component {

	static _template () {
		return {
			Background: {
				rect: true,
				w: 1920,
				h: 1080,
				color: 0xffbef188,
			},
			Poster: {

			},
			Title: {
				x: 960,
				y: 50,
				mount: 0.5,
				text: {
					text: 'Movie Title',
					fontFace: 'Regular',
					fontSize: 64,
					textColor: 0xffffffff
				}
			},
			Release: {
				x: 960,
				y: 100,
				mount: 0.5,
				text: {
					text: 'Release Date',
					fontFace: 'Regular',
					fontSize: 64,
					textColor: 0xffffffff
				}
			},
			Overview: {
				x: 960,
				y: 150,
				mount: 0.5,
				text: {
					text: 'Overview',
					fontFace: 'Regular',
					fontSize: 64,
					textColor: 0xffffffff
				}
			},
			Similar: {

			}
		}
	}

	_enable () {
		console.log(this.similars)

		this.patch({
			Title: { text: { text: this.details.title } },
			Release: { text: { text: this.details.release_date }},
			Overview: { text: { text: this.details.overview }}
		})
	}
}
