// import { writable } from 'svelte/store';

const project =  {
    id: Math.random(),
    projectName: 'Capstone Project',
    activitiesCount: 9,
    activities: [
      {
        id: Math.random(),
        title: 'planning',
        status: 0,
        taskCount: 3,
        tasks: [
          {
            id: Math.random(),
            taskName: 'Create user stories',
            completed: true
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
        status: 1,
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
        status: 2,
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
    ]
  };

export { project };