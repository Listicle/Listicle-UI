<script>
  import Card from "./Card.svelte";
  import { activities, tasks } from '../store/mockedData';
  export let state;

  let isCardOn = false;
  let cardActivities;
  let missionTitle = '';
  $:missionsType = $activities.filter(mission => mission.status === state);

  const handleSubmit = () => {
    const newMission = {
    id: Math.random(),
    title: missionTitle,
    status: state,
    taskCount: 0,
    tasks: []
  };
    activities.update(currentMissions => {
      return [...currentMissions, newMission];
    });
    console.log(missionsType);
    missionTitle = '';
  };

  const deleteMission = (id) => {
    activities.update(currentMissions => {
      return currentMissions.filter(mission => mission.id !== id);
    });
  };
</script>

<div class="w-1/4 p-4 m-4 rounded">
  <h1 class="text-center text-xl">{state}</h1>
  <div class="flex flex-row">
    <form on:submit|preventDefault={handleSubmit}>
      <input class="w-full" type="text" placeholder="Add mission...+" bind:value={missionTitle}>
    </form>
  </div>
  {#if isCardOn}
    <Card />
  {/if}
  {#if missionsType.length}
    {#each missionsType as activity (activity.id)}
      <div>
        <Card {activity} cardState={state} tasks={activity.tasks} />
        <button on:click={() => deleteMission(activity.id)}>🗑</button>
      </div>
    {/each}
  {/if}
</div>

<style>
  div {
    background-color: #f2f2f2;
  }
</style>
