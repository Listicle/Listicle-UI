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
  $: console.log(id);
  $: mission = $data.user.projects.find(project => parseInt(project.id) === parseInt(id));
  $: console.log(mission);

  const status = ['0', '1', '2'];
</script>

<div class="w-4/5 h-full min-h-screen">
  <h1 class="text-center text-6xl pt-6 font-semibold">{mission.projectName}</h1>
  <div class="inner-div flex flex-row py-4 justify-center" >
    {#each status as state}
      <Column {state} missions={mission.activities} projectId={mission.id} />
    {/each}
  </div>
</div>

<style>
  .inner-div {
    height: 85%;
  }
</style>
