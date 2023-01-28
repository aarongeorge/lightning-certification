import { Settings } from '@lightningjs/sdk'
import { Splash } from '../pages/Splash'
import { UpcomingMovies } from '../pages/UpcomingMovies'
import { MovieDetails } from '../pages/MovieDetails'
import { getConfiguration, getUpcomingMovies, getSimilarMovies, getMovieDetails } from './api'

export default {
	boot: async () => {
		Settings.set('configuration', await getConfiguration())
	},
	root: '$',
	routes: [
		{
			path: '$',
			component: Splash
		},
		{
			path: 'movie/upcoming',
			component: UpcomingMovies,
			before: async (page) => {
				page.upcomingMovies = await getUpcomingMovies()
			},
			cache: 60 * 10
		},
		{
			path: 'movie/:id',
			component: MovieDetails,
			before: async (page, { id }) => {
				page.similars = await getSimilarMovies(id)
				page.details = await getMovieDetails(id)
			},
			options: {
				reuseInstance: false,
			  },
			cache: 60 * 10
		}
	]
}
