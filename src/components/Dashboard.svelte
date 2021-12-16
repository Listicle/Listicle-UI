<script>
  import { mutation, graphql, CreateProject, DeleteProject } from '$houdini';
  import listicleLogo from '../img/FullLogo_Transparent_NoBuffer.png';
  import { goto } from '$app/navigation';

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

<div class="flex flex-col md:min-h-screen w-64 pt-4">
  <a href="/">
    <img src={listicleLogo} alt="listicle-logo" class="w-full p-6">
  </a>
  <div>
    <div class="block">
      <h3 class="text-3xl py-2">Projects</h3>
      <form on:submit={() => {
        createPro({ projectName: projectN });
        goto('/');
      }}>
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
                class="opacity-20 hover:opacity-100"
                on:click={() => {
                  deletePro({ id: parseInt(project.id) });
                  goto('/');
                }}>🗑</button>
          </form>
        </div>
      {/each}
    </div>
  </div>
</div>
