export type CreateActivity = {
    readonly "input": CreateActivity$input,
    readonly "result": CreateActivity$result
};

export type CreateActivity$result = {
    readonly createActivity: {
        readonly activity: {
            readonly id: string,
            readonly title: string | null,
            readonly projectId: number,
            readonly status: string
        },
        readonly errors: (string)[]
    } | null
};

export type CreateActivity$input = {
    title: string,
    pId: string,
    status: string
};