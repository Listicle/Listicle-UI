export default {
    name: "DestroyActivity",
    kind: "HoudiniMutation",
    hash: "a6acaba546dda5a8dff8054b929af601ee1f44e89e87f6e30a46a2b3c8a0dd03",

    raw: `mutation DestroyActivity($activityId: Int!) {
  destroyActivity(input: {id: $activityId}) {
    activity {
      id
      status
      title
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