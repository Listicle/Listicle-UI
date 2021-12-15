export type CreateTask = {
    readonly "input": CreateTask$input,
    readonly "result": CreateTask$result
};

export type CreateTask$result = {
    readonly createTask: {
        readonly task: {
            readonly id: string,
            readonly taskName: string | null,
            readonly completed: boolean | null,
            readonly activityId: number
        },
        readonly errors: (string)[]
    } | null
};

export type CreateTask$input = {
    taskName: string,
    completed: boolean,
    activityId: number
};