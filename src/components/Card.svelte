<script>
  import { mutation, graphql, CreateTask, DestroyTask, UpdateTask, UpdateActivityStatus, DestroyActivity } from '$houdini';

  export let mission;

  let buttonStyle = 'w-4 h-4 border border-black mr-1 p-px rounded-full';
  let missionName = '';
  let newStatus;
  let previousStatus;
  let activityId;
  // let isChecked = false

  if (mission.status === '0') {
    previousStatus = null
    newStatus = '1'
  } else if (mission.status === '1') {
    previousStatus = '0'
    newStatus = '2'
  } else {
    previousStatus = '1'
    newStatus = null
  }

  const updateAct = mutation(graphql`
    mutation UpdateActivityStatus($activityStatus: String!, $activityId: ID!) {
      updateActivity(input: {
        status: $activityStatus,
        id: $activityId
      }) {
        activity {
          id
          status
          title
          projectId
        }
        errors
      }
    }
  `)

  const deleteAct = mutation(graphql`
    mutation DestroyActivity($activityId: Int!) {
      destroyActivity(input: {
        id: $activityId
      }) {
        activity {
          id
          status
          title
        }
        errors
      }
    }
  `)

  const createTask = mutation(graphql`
    mutation CreateTask($taskName: String!, $completed: Boolean!, $activityId: Int!) {
      createTask(input: {
        taskName: $taskName,
        completed: $completed
        activityId: $activityId
      }) {
        task {
          id
          taskName
          completed
          activityId
        }
        errors
      }
    }
  `)

  const destroyTask = mutation(graphql`
    mutation DestroyTask($id: Int!, $activityId: Int!) {
      destroyTask(input: {
        id: $id,
        activityId: $activityId
      }) {
        task {
          id
          taskName
          completed
          activityId
        }
        errors
      }
    }
  `)

  const updateTask = mutation(graphql`
    mutation UpdateTask($id: ID!, $completed: Boolean!) {
      updateTask(input: {
        id: $id,
        completed: $completed
      }) {
        task {
          id
          completed
        }
        errors
      }
    }
  `)
</script>

<div class="bg-gray-300 h-auto p-2 my-2 rounded">
  <h3 class="capitalize text-center font-semibold">{mission.title}</h3>
  <form class="w-auto" on:submit={() => createTask({ taskName: missionName, completed: false, activityId: parseInt(mission.id) })}>
    <input class="w-full text-center border-solid border-transparent
    focus:outline-none focus:shadow rounded"
    type="text" placeholder="add a task" onfocus="this.placeholder=''"
    onblur="this.placeholder='add a task'"
    bind:value={missionName}>
  </form>
  {#if mission.tasks.length}
    {#each mission.tasks as task (task.id)}
    <div class="text-sm flex flex-row place-content-between p-1">
      <div class="flex flex-row px-1 items-center">
        <form>
          <button class={task.completed ? `${buttonStyle} bg-black` : buttonStyle} on:click={() => updateTask({ completed: !task.completed, id: parseInt(task.id)})}></button>
        </form>
        <p class={task.completed && 'line-through'}>{task.taskName}</p>
      </div>
      <div class="text-transparent hover:text-black">
        <form on:submit={() => destroyTask({ id: parseInt(task.id), activityId: parseInt(mission.id) })}>
          <button>🗑</button>
        </form>
      </div>
    </div>
    {/each}
  {/if}
    <div class="flex text-sm text-center pt-1 justify-around">
      <form>
        {#if mission.status === '1' || mission.status === '2'}
          <button class="" on:click={() => updateAct({ activityStatus: previousStatus, activityId: mission.id })}>←</button>
        {/if}
        <button class="text-transparent hover:text-black" on:click={() => deleteAct({ activityId: parseInt(mission.id) })}>🗑</button>
        {#if mission.status === '0' || mission.status === '1'}
          <button class="" on:click={() => updateAct({ activityStatus: newStatus, activityId: mission.id })}>→</button>
        {/if}
      </form>
    </div>
</div>

<!-- <button
  class={mission.status === 'to_do' && 'bg-white rounded p-0.5'}
  value="to_do"
  on:click={(e) => updateAct({ activityStatus: e.target.value, projectId: mission.id })}
  >Future</button>
  <button
  class={mission.status === 'doing' && 'bg-white rounded p-0.5'}
  value="doing"
  on:click={(e) => updateAct({ activityStatus: e.target.value, projectId: mission.id })}
  >Current</button>
  <button
  class={mission.status === 'done' && 'bg-white rounded p-0.5'}
  value="done"
  on:click={(e) => updateAct({ activityStatus: e.target.value, projectId: mission.id })}
  >Completed</button> -->
