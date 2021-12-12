<script>
  import Column from '../../components/Column.svelte';
  import { project } from '../../store/ProjectStore';
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
  // $: console.log($data.user.projects);
  let status = project.activities.map(activity => activity.status);
</script>

<div class="w-4/5 h-full min-h-screen ">
  <h1 class="text-center text-6xl pt-6 font-semibold">{project.projectName}</h1>
  <div class="inner-div flex flex-row py-4 justify-center " >
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
