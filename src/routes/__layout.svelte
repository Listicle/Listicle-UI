<script context="module">
	import { setEnvironment } from '$houdini'
	import environment from '../environment'

	setEnvironment(environment)
</script>

<script>
	import Dashboard from '../components/Dashboard.svelte';
	import '../app.css';
</script>


<main class="flex flex-row h-screen w-screen max-w-screen-xl font-sans text-sky-900">
	<Dashboard />
	<slot />
</main>
