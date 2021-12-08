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
        id: '6',
        taskName: 'Create user stories',
        completed: false
      },
      {
        id: '7',
        taskName: 'Create wire-frame',
        completed: false
      },
      {
        id: '6',
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
        id: '14',
        taskName: 'Complete svelte tutorial',
        completed: false
      },
      {
        id: '56',
        taskName: 'Complete sapper tutorial',
        completed: false
      },
      {
        id: '43',
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
        id: '21',
        taskName: 'Create UI template',
        completed: false
      },
      {
        id: '45',
        taskName: 'Mock data and build around it',
        completed: false
      },
      {
        id: '92',
        taskName: 'Integrate apollo calls',
        completed: false
      }
    ]
  }
])

export { projectList, activities };