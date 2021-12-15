export type UpdateTask = {
    readonly "input": UpdateTask$input,
    readonly "result": UpdateTask$result
};

export type UpdateTask$result = {
    readonly updateTask: {
        readonly task: {
            readonly id: string,
            readonly completed: boolean | null
        },
        readonly errors: (string)[]
    } | null
};

export type UpdateTask$input = {
    id: string,
    completed: boolean
};