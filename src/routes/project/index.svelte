<script>
  import Column from '../../components/Column.svelte';
  import { project } from '../../store/ProjectStore';
    
  let status = project.activities.map(activity => activity.status);
</script>

<div class="w-4/5 h-full min-h-screen ">
  <h1 class="text-center text-6xl pt-6">New Project</h1>
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