<script>
  export let state;
  import Card from "./Card.svelte";
  let isCardOn = false;
  let activities = [];

  const createActivity = () => {
    isCardOn = true;
  }
</script>

<div class="w-1/4 p-4 m-4 rounded">
  <h1 class="text-center text-xl">{state}</h1>
  <div class="flex flex-row">
    <p>Add an activity</p>
    <p on:click={createActivity}>+</p>
  </div>
  {#if isCardOn}
    <Card />
  {/if}
  {#if activities.length}
    {#each activities as activity (createActivity.id)}
      <Card {activity} {state} />
    {/each }
  {/if}
</div>

<style>
  div {
    background-color: #f2f2f2;
  }
</style>