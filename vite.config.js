import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import postcssMediaMinmax from 'postcss-media-minmax';
import cssHasPseudo from 'css-has-pseudo';

export default defineConfig({
	base: './',
	root: './src/',
	build: {
		outDir: resolve(__dirname, 'dist/'),
		emptyOutDir: true,
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, 'src/modules')
		})
	],
	css: {
		postcss: {
			plugins: [
				autoprefixer,
				postcssMediaMinmax,
				cssHasPseudo,
			]
		}
	},
});
