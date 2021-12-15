<script context="module">
	import { setEnvironment } from '$houdini'
	import environment from '../environment'

	setEnvironment(environment)
</script>

<script>
	import Dashboard from '../components/Dashboard.svelte';
	import '../app.css';
  import { query, graphql } from '$houdini'

  const { data } = query(graphql`
    query getProjects {
      user(id:12) {
        id
        username
        projectsCount
        projects {
          id
          projectName
        }
      }
    }
  `)
  $: console.log($data);
	let projects = $data.user.projects;
</script>


<main class="flex flex-row h-screen w-screen max-w-screen-xl font-sans text-sky-900">
	<Dashboard {projects} />
	<slot />
</main>
