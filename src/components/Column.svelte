<script>
  import Card from "./Card.svelte";
  import { mutation, graphql, CreateActivity } from '$houdini';
  import { scale } from 'svelte/transition';

  export let projectId;
  export let missions;
  export let state;

  let missionStatus;
  let missionTitle = '';

  $: filteredMissions = missions.filter(mission => mission.status === state);

  const createAct = mutation(graphql`
    mutation CreateActivity($title: String!, $pId: ID!, $status: String!) {
      createActivity(input: {
        title: $title,
        projectId: $pId,
        status: $status
      }) {
        activity {
          id
          title
          projectId
          status
        }
        errors
      }
    }
  `)

  if (state === '0') {
    missionStatus = 'Future Missions'
  } else if (state === '1') {
    missionStatus = 'Current Missions'
  } else {
    missionStatus = 'Completed Missions'
  }

</script>

<div class="w-72 p-4 m-4 rounded overflow-scroll" in:scale >
  <h1 class="text-center text-xl font-semibold">{missionStatus}</h1>
  <div class="flex flex-row justify-center">
    <form on:submit={() => createAct({ title: missionTitle, pId: projectId, status: state})}>
      <input
        class="w-full text-center border-solid border-transparent
          focus:outline-none focus:shadow rounded"
        type="text"
        placeholder="add a mission"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='add a mission'"
        bind:value={missionTitle}
      >
    </form>
  </div>
    {#each filteredMissions as mission (mission.id)}
      <div>
        <Card {mission} />
      </div>
    {/each}
</div>

<style>
  div {
    background-color: #f2f2f2;
  }
</style>
