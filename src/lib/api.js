import { Settings } from '@lightningjs/sdk'

const getRequest = async path => await fetch(`https://api.themoviedb.org/3${path}?api_key=${process.env.APP_API_KEY}`).then(response => response.json())
export const getConfiguration = _ => getRequest('/configuration')
export const getUpcomingMovies = _ => getRequest('/movie/upcoming')
export const getMovieDetails = id => getRequest(`/movie/${id}`)
export const getSimilarMovies = id => getRequest(`/movie/${id}/similar`)

export const getImagePath = (item, size = 0) => {
	if (!item) return null
	const { images: { secure_base_url, poster_sizes } } = Settings.get('user', 'configuration')
	return `${secure_base_url}/${poster_sizes[size]}${item.poster_path}`
}
