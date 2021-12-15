export default {
    name: "getAllProjects",
    kind: "HoudiniQuery",
    hash: "5d960d7856f86e21583b41f8e98bc7c96505a864cc2d95ab6609f01eca8365e4",

    raw: `query getAllProjects {
  user(id: 12) {
    id
    username
    projectsCount
    projects {
      id
      projectName
      activities {
        id
        title
        status
        tasksCount
        tasks {
          id
          taskName
          completed
        }
      }
    }
  }
}
`,

    rootType: "Query",

    selection: {
        user: {
            type: "User",
            keyRaw: "user(id: 12)",

            fields: {
                id: {
                    type: "ID",
                    keyRaw: "id"
                },

                username: {
                    type: "String",
                    keyRaw: "username"
                },

                projectsCount: {
                    type: "Int",
                    keyRaw: "projectsCount"
                },

                projects: {
                    type: "Project",
                    keyRaw: "projects",

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        projectName: {
                            type: "String",
                            keyRaw: "projectName"
                        },

                        activities: {
                            type: "Activity",
                            keyRaw: "activities",

                            fields: {
                                id: {
                                    type: "ID",
                                    keyRaw: "id"
                                },

                                title: {
                                    type: "String",
                                    keyRaw: "title"
                                },

                                status: {
                                    type: "String",
                                    keyRaw: "status"
                                },

                                tasksCount: {
                                    type: "Int",
                                    keyRaw: "tasksCount"
                                },

                                tasks: {
                                    type: "Task",
                                    keyRaw: "tasks",

                                    fields: {
                                        id: {
                                            type: "ID",
                                            keyRaw: "id"
                                        },

                                        taskName: {
                                            type: "String",
                                            keyRaw: "taskName"
                                        },

                                        completed: {
                                            type: "Boolean",
                                            keyRaw: "completed"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    policy: "NetworkOnly"
};