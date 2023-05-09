import autoprefixer from 'autoprefixer';
import postcssMediaMinmax from 'postcss-media-minmax';
import postcssHasPseudo from 'css-has-pseudo';

export default {
	plugins: [
		autoprefixer,
		postcssMediaMinmax,
		postcssHasPseudo,
	]
}
