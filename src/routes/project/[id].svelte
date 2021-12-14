<script>
  import Column from '../../components/Column.svelte';
  import { query, graphql } from '$houdini';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  const { id } = $page.params;
  // $: idd = id

  const { data } = query(graphql`
    query getAllProjects {
      user(id:12) {
        id
        username
        projectsCount
        projects {
          id
          projectName
          activities {
            id
            title
            status
            tasksCount
            tasks {
              id
              taskName
              completed
            }
          }
        }
      }
    }
  `)

  $: project = $data.user.projects.find(project => project.id === id);
  $: console.log(project);

  const status = ['to_do', 'doing', 'done'];
</script>

<div class="w-4/5 h-full min-h-screen ">
  <h1 class="text-center text-6xl pt-6 font-semibold">{project.projectName}</h1>
  <div class="inner-div flex flex-row py-4 justify-center" >
    {#each status as state (Math.random())}
      <Column {state} missions={project.activities} />
    {/each}
  </div>
</div>

<style>
  .inner-div {
    height: 85%;
  }
</style>
