const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'space': "url('/img/space.png')",
				'space1': "url('/img/space1.png')"
			}
		}
	},

	plugins: []
};

module.exports = config;
