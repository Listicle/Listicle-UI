export type DestroyTask = {
    readonly "input": DestroyTask$input,
    readonly "result": DestroyTask$result
};

export type DestroyTask$result = {
    readonly destroyTask: {
        readonly task: {
            readonly id: string,
            readonly taskName: string | null,
            readonly completed: boolean | null,
            readonly activityId: number
        },
        readonly errors: (string)[]
    } | null
};

export type DestroyTask$input = {
    id: number,
    activityId: number
};