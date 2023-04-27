import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import postcssMediaMinmax from 'postcss-media-minmax';
import cssHasPseudo from 'css-has-pseudo';

export default defineConfig({
	base: '/naruto-effect-frontend/',
	root: './src/',
	build: {
		outDir: resolve(__dirname, 'dist/'),
		emptyOutDir: true,
		rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        practice: resolve(__dirname, 'src/practice.html'),
        participant: resolve(__dirname, 'src/participant.html'),
        document: resolve(__dirname, 'src/document.html'),
      },
    },
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
