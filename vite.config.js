import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import postcssMediaMinmax from 'postcss-media-minmax';
import postcssCsso from 'postcss-csso';

export default defineConfig({
	base: './',
	root: './src/',
	plugins: [
		handlebars({
			partialDirectory: resolve(import.meta.url, 'src/modules')
		})
	],
	css: {
		postcss: {
			plugins: [
				autoprefixer(),
				postcssMediaMinmax(),
				postcssCsso(),
			]
		}
	},
});
