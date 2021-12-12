<script>
  // import { projectList } from '../store/mockedData.js';
  import listicleLogo from '../img/FullLogo_Transparent_NoBuffer.png';
  export let projects;
  let newProjectName = '';

  const createInput = () => {
    isInputOn = true;
  };

  const handleSubmit = () => {
    
  };

  const deleteProject = (id) => {
   
  };
</script>

<div class="flex flex-col min-h-screen w-64 backdrop-grayscale">
  <img src={listicleLogo} alt="listicle-logo" class="w-full p-4">
  <div>
    <div class="block">
      <h3 class="text-3xl py-2">Projects</h3>
      <form >
        <input class="w-full text-center border-solid border-transparent 
        focus:outline-none focus:shadow rounded" type="text" placeholder="add a project" 
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='add a project'"
        bind:value={newProjectName}>
      </form>
    </div>
    <div class="flex flex-col p-3 font-semibold backdrop-grayscale-0 ">
      {#each projects as project (project.id)}
        <div class="flex flex-row justify-between">
          <a href={`/project/${project.projectName}`}><p>{project.projectName}</p></a>
          <button class="text-transparent hover:text-black" on:click={() => deleteProject(project.id)}>🗑</button>
        </div>
      {/each}
    </div>
  </div>
</div>
