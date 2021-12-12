import { query, graphql } from '$houdini';
import { writable } from 'svelte/store';

const { data } = query(graphql`
  query getProjects {
    users {
      id
      username
      projectsCount
      projects {
        id
        projectName
      }
    }
  }
`)

export const projectList = writable(data.users[1].projects)