export default {
    name: "DeleteActivity",
    kind: "HoudiniMutation",
    hash: "99f55dcc511cc57f36f8ca58ae91e5096e2117ce4ffe48db17a69641d6a58c8c",

    raw: `mutation DeleteActivity($activityId: Int!) {
  destroyActivity(input: {id: $activityId}) {
    activity {
      id
      status
      title
      projectId
    }
    errors
  }
}
`,

    rootType: "Mutation",

    selection: {
        destroyActivity: {
            type: "DestroyActivityPayload",
            keyRaw: "destroyActivity(input: {id: $activityId})",

            fields: {
                activity: {
                    type: "Activity",
                    keyRaw: "activity",

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        status: {
                            type: "String",
                            keyRaw: "status"
                        },

                        title: {
                            type: "String",
                            keyRaw: "title"
                        },

                        projectId: {
                            type: "Int",
                            keyRaw: "projectId"
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
            activityId: "Int"
        },

        types: {}
    }
};