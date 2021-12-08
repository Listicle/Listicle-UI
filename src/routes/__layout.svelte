<script>
	import Dashboard from '../components/Dashboard.svelte';
	import '../app.css';
</script>


<main class="flex flex-row h-screen w-screen max-w-screen-xl space ">
	<Dashboard />
	<slot />
</main>

