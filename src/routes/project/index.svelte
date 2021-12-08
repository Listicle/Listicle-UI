<script>
  import Column from "../../components/Column.svelte";
  let states = ['To do', 'Doing', 'Done']
</script>

<div class="w-4/5 h-full min-h-screen ">
  <h1 class="text-center text-6xl pt-6">New Project</h1>
  <div class="inner-div flex flex-row py-4 justify-center ">
    {#each states as state} 
    <Column {state} />
    {/each}
  </div>
  
</div>

<style>
  .inner-div {
   height: 85%;
  }
</style>