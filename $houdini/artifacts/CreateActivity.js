export default {
    name: "CreateActivity",
    kind: "HoudiniMutation",
    hash: "6b53d385c4cf81322a9d0375d170feb8381ee42b70da72a8207c9852b940d126",

    raw: `mutation CreateActivity($title: String!, $pId: ID!, $status: String!) {
  createActivity(input: {title: $title, projectId: $pId, status: $status}) {
    activity {
      id
      title
      projectId
      status
    }
    errors
  }
}
`,

    rootType: "Mutation",

    selection: {
        createActivity: {
            type: "CreateActivityPayload",
            keyRaw: "createActivity(input: {title: $title, projectId: $pId, status: $status})",

            fields: {
                activity: {
                    type: "Activity",
                    keyRaw: "activity",

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        title: {
                            type: "String",
                            keyRaw: "title"
                        },

                        projectId: {
                            type: "Int",
                            keyRaw: "projectId"
                        },

                        status: {
                            type: "String",
                            keyRaw: "status"
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
            title: "String",
            pId: "ID",
            status: "String"
        },

        types: {}
    }
};