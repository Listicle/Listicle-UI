export default {
    name: "CreateProject",
    kind: "HoudiniMutation",
    hash: "4d5c5bace4eeb564058e7f52f99beb8f1416dd6fbb2e4ac0d6166f050162bb6c",

    raw: `mutation CreateProject($projectName: String!) {
  createProject(input: {projectName: $projectName, userId: 12}) {
    project {
      id
      userId
      projectName
    }
    errors
  }
}
`,

    rootType: "Mutation",

    selection: {
        createProject: {
            type: "CreateProjectPayload",
            keyRaw: "createProject(input: {projectName: $projectName, userId: 12})",

            fields: {
                project: {
                    type: "Project",
                    keyRaw: "project",

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        userId: {
                            type: "Int",
                            keyRaw: "userId"
                        },

                        projectName: {
                            type: "String",
                            keyRaw: "projectName"
                        }
                    }
                },

                errors: {
                    type: "String",
                    keyRaw: "errors"
                }
            }
        }
    },

    input: {
        fields: {
            projectName: "String"
        },

        types: {}
    }
};