export type DeleteProject = {
    readonly "input": DeleteProject$input,
    readonly "result": DeleteProject$result
};

export type DeleteProject$result = {
    readonly destroyProject: {
        readonly project: {
            readonly id: string,
            readonly userId: number
        },
        readonly errors: (string)[]
    } | null
};

export type DeleteProject$input = {
    id: number
};