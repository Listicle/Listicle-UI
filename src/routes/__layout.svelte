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
      users {
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
  $: console.log($data.users[1].projects);
	let projects = $data.users[1].projects;
</script>


<main class="flex flex-row h-screen w-screen max-w-screen-xl font-sans text-sky-900">
	<Dashboard {projects} />
	<slot />
</main>
