export default {
    name: "DeleteProject",
    kind: "HoudiniMutation",
    hash: "bb0f0f84b240ad07bc71dde07d16115879472f361fe6916a5d19297c5dec86ec",

    raw: `mutation DeleteProject($id: Int!) {
  destroyProject(input: {id: $id, userId: 12}) {
    project {
      id
      userId
    }
    errors
  }
}
`,

    rootType: "Mutation",

    selection: {
        destroyProject: {
            type: "DestroyProjectPayload",
            keyRaw: "destroyProject(input: {id: $id, userId: 12})",

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
            id: "Int"
        },

        types: {}
    }
};