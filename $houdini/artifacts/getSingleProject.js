export default {
    name: "getSingleProject",
    kind: "HoudiniQuery",
    hash: "faaf276f69a71c63d865feeeb5912ae1688c3ef1b6b4ebfefdf5d18cf1601e93",

    raw: `query getSingleProject($ID: ID!) {
  project(id: $ID) {
    id
    projectName
    activitiesCount
    activities {
      id
      projectId
      title
      tasksCount
      tasks {
        id
        activityId
        taskName
      }
    }
  }
}
`,

    rootType: "Query",

    selection: {
        project: {
            type: "Project",
            keyRaw: "project(id: $ID)",

            fields: {
                id: {
                    type: "ID",
                    keyRaw: "id"
                },

                projectName: {
                    type: "String",
                    keyRaw: "projectName"
                },

                activitiesCount: {
                    type: "Int",
                    keyRaw: "activitiesCount"
                },

                activities: {
                    type: "Activity",
                    keyRaw: "activities",

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        projectId: {
                            type: "Int",
                            keyRaw: "projectId"
                        },

                        title: {
                            type: "String",
                            keyRaw: "title"
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

                                activityId: {
                                    type: "Int",
                                    keyRaw: "activityId"
                                },

                                taskName: {
                                    type: "String",
                                    keyRaw: "taskName"
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    input: {
        fields: {
            ID: "ID"
        },

        types: {}
    },

    policy: "NetworkOnly"
};