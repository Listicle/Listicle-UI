const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'image': "url('https://wallpapercave.com/wp/wp8667734.jpg')",
				'image2': "url('https://wallpapercave.com/wp/wp8312493.png')",
				'image3': "url('https://cdn.wallpapersafari.com/74/29/BOPzUX.jpg')",
			}
		}
	},

	plugins: []
};

module.exports = config;
