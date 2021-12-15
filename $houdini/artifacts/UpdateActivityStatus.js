export default {
    name: "UpdateActivityStatus",
    kind: "HoudiniMutation",
    hash: "54511ffec93d431dd1e1c6a7a06e845f5119a2b4617b9b712bd489b72dab4db4",

    raw: `mutation UpdateActivityStatus($activityStatus: String!, $activityId: ID!) {
  updateActivity(input: {status: $activityStatus, id: $activityId}) {
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
        updateActivity: {
            type: "UpdateActivityPayload",
            keyRaw: "updateActivity(input: {status: $activityStatus, id: $activityId})",

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
            activityStatus: "String",
            activityId: "ID"
        },

        types: {}
    }
};