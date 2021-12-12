export default {
    name: "getProjects",
    kind: "HoudiniQuery",
    hash: "a41b41e306f68e59b9d7d58e13e6ca7c52a7c8e11a11466c5e6eec700edc0b81",

    raw: `query getProjects {
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
`,

    rootType: "Query",

    selection: {
        users: {
            type: "User",
            keyRaw: "users",

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
                        }
                    }
                }
            }
        }
    },

    policy: "NetworkOnly"
};