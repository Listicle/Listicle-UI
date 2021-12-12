/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: '.json',
	sourceGlob: 'src/**/*.svelte',
	module: 'esm',
	framework: 'kit',
	apiUrl: 'https://listicle-be.herokuapp.com/graphql'
}

export default config
