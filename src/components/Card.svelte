<script>
  export let activity;
  // export let cardState;
  export let tasks;
  let newTaskList = [];
  let activityName = '';
  let taskInput = '';
  let isChecked = false;

  const handleSubmit = () => {
    let newTask = {
      id: Math.random(),
      taskName: activityName,
      completed: false
    };
    tasks = [...tasks, newTask];
    activityName = '';
  };

  const deleteTask = (id) => {
    newTaskList = tasks.filter(task => task.id !== id);
    tasks = newTaskList;
  };
</script>

<div class="bg-gray-300 h-auto p-2 my-2">
  <h3>{activity.title}</h3>
  <form on:submit|preventDefault={handleSubmit} class="w-auto">
    <input class="w-full" type="text" placeholder="Add new task..." bind:value={activityName}>
  </form>
  {#if tasks.length}
    {#each tasks as task (task.id)}
      <label for={task.taskName}>{task.taskName}</label>
      <input type="checkbox" id={task.id} bind:checked={isChecked}>
      <button on:click={() => deleteTask(task.id)}>🗑</button>
    {/each}
  {/if}
</div>
