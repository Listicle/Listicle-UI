const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'space': "url('/src/img/space.jpeg')",
				'space1': "url('/src/img/space1.jpeg')"
			}
		}
	},

	plugins: []
};

module.exports = config;
