<script>
  import { mutation, graphql, CreateProject, DeleteProject } from '$houdini';
  import listicleLogo from '../img/FullLogo_Transparent_NoBuffer.png';

  export let projects;

  let projectN;
  let newProjectName = '';

  const createInput = () => {
    isInputOn = true;
  };

  const createPro = mutation(graphql`
    mutation CreateProject($projectName: String!) {
      createProject(input: {
        projectName: $projectName,
        userId: 12
      }) {
        project {
          id
          userId
          projectName
        }
        errors
      }
    }
  `);

  const deletePro = mutation(graphql`
    mutation DeleteProject($id: Int!) {
      destroyProject(input: {
        id: $id,
        userId: 12
      }) {
        project {
          id
          userId
        }
        errors
      }
    }
  `);
</script>

<div class="flex flex-col min-h-screen w-64 backdrop-grayscale">
  <img src={listicleLogo} alt="listicle-logo" class="w-full p-4">
  <div>
    <div class="block">
      <h3 class="text-3xl py-2">Projects</h3>
      <form on:submit={() => createPro({ projectName: projectN })}>
        <input
          class="w-full text-center border-solid border-transparent
            focus:outline-none focus:shadow rounded"
          type="text"
          placeholder="add a project"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='add a project'"
          bind:value={projectN}
        >
      </form>
    </div>
    <div class="flex flex-col p-3 font-semibold backdrop-grayscale-0 ">
      {#each projects as project (project.id)}
        <div class="flex flex-row justify-between">
          <a href={`/project/${project.id}`}>
            <p>{project.projectName}</p>
          </a>
          <form>
            <button
              class="text-transparent hover:text-black"
              on:click={() => deletePro({ id: parseInt(project.id) })}
            >🗑</button>
          </form>
        </div>
      {/each}
    </div>
  </div>
</div>
