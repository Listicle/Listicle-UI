<script>
  export let activity;
  export let cardState;
  let activityName = activity.title;
  let isTaskOn = false;
  let tasks = [];

  const createTask = () => {
    let newTask = {
            id: Math.random(),
            taskName: 'Create user stories',
            completed: false
          };
    capstoneProject.update(currentProject => {
      let updatedProject = currentProject.activities.tasks.push(newTask)
      return updatedProject;
    })
  };

  const handleSubmit = () => {
    let newActivity = {
        id: Math.random(),
        title: activityName,
        status: cardState,
        tasks: []
      };
      capstoneProject.update(currentProject => {
        let updatedProject = currentProject.activities.push(activityName)
        return updatedProject;
      })
  };
</script>

<div>
  {#if !activityName}
    <form on:sumit|preventDefault={handleSubmit}>
      <input type="text" placeholder="Activity name..." bind:value={activityName}>
    </form>
  {:else}
    <h3>{activityName}</h3>
  {/if}
  <div class="flex flex-row">
    <p>Add a task</p>
    <p on:click={createTask}>+</p>
  </div>
</div>