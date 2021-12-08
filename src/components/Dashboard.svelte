<script>
  import { projectList } from '../store/mockedData.js';
  import listicleLogo from '../img/listicle3.png';

  let isInputOn = false;
  let newProjectName = '';

  const createInput = () => {
    isInputOn = true;
  }
  
  const handleSubmit = () => {
    let newProject = { id: Math.random(), projectName: newProjectName }
    projectList.update(currentProjects => {
      return [newProject, ...currentProjects]
    })
    newProject = '';
    isInputOn = false;
  }

  const deleteProject = (id) => {
    projectList.update(currentProjects => {
      return currentProjects.filter(project => project.id !== id)
    })
  }
</script>

<div class="min-h-screen w-1/5 backdrop-grayscale">
  <img src={listicleLogo} alt="listicle-logo" class="w-80 py-10">
  <div>
    <div class="flex flex-row space-x-14 items-end">
      <h3 class="text-3xl">Projects</h3>
      <p class="text-3xl" on:click={createInput}> +</p>
    </div>
    <div class="flex flex-col p-3 font-semibold backdrop-grayscale-0 ">
      {#if isInputOn}
      <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="Type the name of your project..." bind:value={newProjectName}>
      </form>
      {/if}
      {#each $projectList as project (project.id)}
      <div class="flex flex-row justify-between">
        <p>{project.projectName}</p>
        <p on:click={() => deleteProject(project.id)}>🗑</p>
      </div>
      {/each}
    </div>
  </div>
</div>