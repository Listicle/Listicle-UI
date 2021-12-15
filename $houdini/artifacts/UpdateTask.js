export default {
    name: "UpdateTask",
    kind: "HoudiniMutation",
    hash: "b068457b105e0f66d206a5cd055845d4764337d18a6bdcde1b12664ebb770376",

    raw: `mutation UpdateTask($id: ID!, $completed: Boolean!) {
  updateTask(input: {id: $id, completed: $completed}) {
    task {
      id
      completed
    }
    errors
  }
}
`,

    rootType: "Mutation",

    selection: {
        updateTask: {
            type: "UpdateTaskPayload",
            keyRaw: "updateTask(input: {id: $id, completed: $completed})",

            fields: {
                task: {
                    type: "Task",
                    keyRaw: "task",

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        completed: {
                            type: "Boolean",
                            keyRaw: "completed"
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
            id: "ID",
            completed: "Boolean"
        },

        types: {}
    }
};