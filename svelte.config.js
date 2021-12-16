import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-node';
import path from 'path';
import houdini from 'houdini-preprocess';
import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default {
	config,
  preprocess: [houdini()],
  kit: {
    vite: {
			resolve: {
				alias: {
					$houdini: path.resolve('.', '$houdini'),
				},
			},
			server: {
				fs: {
					allow: ['..'],
				}
			}
		}
  }
}
