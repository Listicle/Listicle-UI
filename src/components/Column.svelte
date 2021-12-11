<script>
  import Card from "./Card.svelte";
  export let missions;
  export let state;

  let missionStatus;
  let missionTitle = '';
  $:filteredMissions = missions.filter(mission => mission.status === state)

  if(state === 0) {
    missionStatus = 'Future Missions'
  }else if(state === 1) {
    missionStatus = 'Current Missions'
  } else {
    missionStatus = 'Completed Missions'
  }
  
</script>

<div class="w-1/4 p-4 m-4 rounded" >
  <h1 class="text-center text-xl">{missionStatus}</h1>
  <div class="flex flex-row justify-center">
    <form >
      <input class="w-full text-center border-solid border-transparent 
      focus:outline-none focus:shadow rounded" type="text" placeholder="add a mission" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='add a mission'"
      bind:value={missionTitle}>
    </form>
  </div>
  {#if filteredMissions.length}
    {#each filteredMissions as mission (mission.id)}
      <div>
        <Card {mission} cardState={state} tasks={mission.tasks} />
      </div>
    {/each}
  {/if}
</div>

<style>
  div {
    background-color: #f2f2f2;
  }
</style>
