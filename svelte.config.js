import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import path from 'path';
import houdini from 'houdini-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'my-output-directory' }),

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
