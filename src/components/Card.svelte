<script>
  export let mission;
  export let tasks;

  let buttonStyle = 'w-4 h-4 border border-black mr-1 p-px rounded-full';
  let missionName = '';
</script>

<div class="bg-gray-300 h-auto p-2 my-2 rounded">
  <h3 class="capitalize text-center">{mission.title}</h3>
  <form class="w-auto">
    <input class="w-full text-center border-solid border-transparent 
    focus:outline-none focus:shadow rounded" 
    type="text" placeholder="add a task" onfocus="this.placeholder=''" 
    onblur="this.placeholder='add a task'"
    bind:value={missionName}>
  </form>
  {#if tasks.length}
    {#each tasks as task (task.id)}
    <div class="text-sm flex flex-row place-content-between p-1">
      <div class="flex flex-row px-1 items-center"> 
        <button class={task.completed ? `${buttonStyle} bg-black` : buttonStyle} ></button>
        <p class={task.completed && 'line-through'}>{task.taskName}</p>
      </div>
      <div>
        <button>🗑</button>
      </div>
    </div>
    {/each}
    <div class="flex text-sm text-center pt-1 justify-around">
      <button class={mission.status === 0 && 'bg-white rounded p-0.5'}>Future</button>
      <button class={mission.status === 1 && 'bg-white rounded p-0.5'}>Current</button>
      <button class={mission.status === 2 && 'bg-white rounded p-0.5'}>Completed</button>
      <button>🗑</button>
    </div>
  {/if}
</div>
