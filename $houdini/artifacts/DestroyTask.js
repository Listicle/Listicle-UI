export default {
    name: "DestroyTask",
    kind: "HoudiniMutation",
    hash: "3fceb4b71fea1703e61f586ca98319cf6a7009414536ce73b885f2485a2316fc",

    raw: `mutation DestroyTask($id: Int!, $activityId: Int!) {
  destroyTask(input: {id: $id, activityId: $activityId}) {
    task {
      id
      taskName
      completed
      activityId
    }
    errors
  }
}
`,

    rootType: "Mutation",

    selection: {
        destroyTask: {
            type: "DestroyTaskPayload",
            keyRaw: "destroyTask(input: {id: $id, activityId: $activityId})",

            fields: {
                task: {
                    type: "Task",
                    keyRaw: "task",

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
                        },

                        activityId: {
                            type: "Int",
                            keyRaw: "activityId"
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
            id: "Int",
            activityId: "Int"
        },

        types: {}
    }
};