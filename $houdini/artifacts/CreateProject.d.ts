export type CreateProject = {
    readonly "input": CreateProject$input,
    readonly "result": CreateProject$result
};

export type CreateProject$result = {
    readonly createProject: {
        readonly project: {
            readonly id: string,
            readonly userId: number,
            readonly projectName: string | null
        },
        readonly errors: (string)[]
    } | null
};

export type CreateProject$input = {
    projectName: string
};