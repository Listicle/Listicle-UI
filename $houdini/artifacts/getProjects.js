export default {
    name: "getProjects",
    kind: "HoudiniQuery",
    hash: "12a2ba2a0254a36f884020396fda3cb079cc3a88351dbe2313ddbf579ad09591",

    raw: `query getProjects {
  user(id: 12) {
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
                        }
                    }
                }
            }
        }
    },

    policy: "NetworkOnly"
};