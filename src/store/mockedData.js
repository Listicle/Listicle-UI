import { writable } from 'svelte/store';

const capstoneProject = writable(
  {
    id: '2',
    projectName: 'Capstone Project',
    activitiesCount: 9,
    activities: [
      {
        id: '3',
        title: 'planning',
        status: 0,
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
        id: '5',
        title: 'learning',
        status: 0,
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
        id: '9',
        title: 'executing',
        status: 0,
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
    ]

  }
);

const projectList = writable([
  {
    id: '2',
    projectName: 'Capstone Project'
  },
  {
    id: '4',
    projectName: 'Iceland Trip'
  },
  {
    id: '7',
    projectName: 'Job hunt'
  }
]);

export { capstoneProject, projectList }