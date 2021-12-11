import { writable } from "svelte/store";

const projectList = writable([]);

const getProjectsList = () => {
  const projects = [{
    id: Math.random(),
    projectName: 'Capstone Project'
  },
  {
    id: Math.random(),
    projectName: 'Iceland Trip'
  },
  {
    id: Math.random(),
    projectName: 'Job hunt'
  }];
  projectList.set(projects)
};

getProjectsList();

const activities = writable([
  {
    id: Math.random(),
    title: 'planning',
    status: 'Future Missions',
    taskCount: 3,
    tasks: [
      {
        id: Math.random(),
        taskName: 'Create user stories',
        completed: false
      },
      {
        id: Math.random(),
        taskName: 'Create wire-frame',
        completed: false
      },
      {
        id: Math.random(),
        taskName: 'Create architecture diagram',
        completed: false
      }
    ]
  },
  {
    id: Math.random(),
    title: 'learning',
    status: 'Current Missions',
    taskCount: 3,
    tasks: [
      {
        id: Math.random(),
        taskName: 'Complete svelte tutorial',
        completed: false
      },
      {
        id: Math.random(),
        taskName: 'Complete sapper tutorial',
        completed: false
      },
      {
        id: Math.random(),
        taskName: 'Complete tailwind tutorial',
        completed: false
      }
    ]
  },
  {
    id: Math.random(),
    title: 'executing',
    status: 'Successful Missions',
    taskCount: 3,
    tasks: [
      {
        id: Math.random(),
        taskName: 'Create UI template',
        completed: false
      },
      {
        id: Math.random(),
        taskName: 'Mock data and build around it',
        completed: false
      },
      {
        id: Math.random(),
        taskName: 'Integrate apollo calls',
        completed: false
      }
    ]
  }
]);

const tasks = writable([
  {
    id: Math.random(),
    taskName: 'random stuff',
    completed: false
  },
  {
    id: Math.random(),
    taskName: 'else',
    completed: false
  }
]);

const flipDurationMs = 300;

export { projectList, activities, tasks, flipDurationMs };
