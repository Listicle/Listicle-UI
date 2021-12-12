<script>
  import { projectList } from '../store/mockedData.js';
  import listicleLogo from '../img/FullLogo_Transparent.png';

  let isInputOn = false;
  let newProjectName = '';

  const createInput = () => {
    isInputOn = true;
  };

  const handleSubmit = () => {
    let newProject = { id: Math.random(), projectName: newProjectName };
    projectList.update(currentProjects => {
      return [newProject, ...currentProjects];
    })
    newProjectName = '';
    isInputOn = false;
  };

  const deleteProject = (id) => {
    projectList.update(currentProjects => {
      return currentProjects.filter(project => project.id !== id);
    });
  };
</script>

<div class="flex flex-col min-h-screen w-64 backdrop-grayscale">
  <img src={listicleLogo} alt="listicle-logo" class="w-80 py-10">
  <div>
    <div class="block">
      <h3 class="text-3xl">Projects</h3>
      <form >
        <input class="w-full text-center border-solid border-transparent 
        focus:outline-none focus:shadow rounded" type="text" placeholder="add a project" 
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='add a project'"
        bind:value={newProjectName}>
      </form>
    </div>
    <div class="flex flex-col p-3 font-semibold backdrop-grayscale-0 ">
      {#each $projectList as project (project.id)}
        <div class="flex flex-row justify-between">
          <a href="/project"><p>{project.projectName}</p></a>
          <button class="text-transparent hover:text-black" on:click={() => deleteProject(project.id)}>🗑</button>
        </div>
      {/each}
    </div>
  </div>
</div>
