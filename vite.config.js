import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import postcss from './postcss.config.js';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		base: mode === 'development' ? '/' : env.VITE_BASE,
		root: './src/',
		build: {
			outDir: resolve(__dirname, 'dist/'),
			emptyOutDir: true,
			minify: false,
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
			postcss,
		},
	}
});
