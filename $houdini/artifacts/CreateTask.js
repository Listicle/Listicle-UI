export default {
    name: "CreateTask",
    kind: "HoudiniMutation",
    hash: "81019bc5c540a9a5a14aaf6ae93625c5a482a2fb213f6bf3f64bb7bfd8a60d3d",

    raw: `mutation CreateTask($taskName: String!, $completed: Boolean!, $activityId: Int!) {
  createTask(
    input: {taskName: $taskName, completed: $completed, activityId: $activityId}
  ) {
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
        createTask: {
            type: "CreateTaskPayload",
            keyRaw: "createTask(input: {taskName: $taskName, completed: $completed, activityId: $activityId})",

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
            taskName: "String",
            completed: "Boolean",
            activityId: "Int"
        },

        types: {}
    }
};