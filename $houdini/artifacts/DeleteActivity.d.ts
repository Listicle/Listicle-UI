export type DeleteActivity = {
    readonly "input": DeleteActivity$input,
    readonly "result": DeleteActivity$result
};

export type DeleteActivity$result = {
    readonly destroyActivity: {
        readonly activity: {
            readonly id: string,
            readonly status: string,
            readonly title: string | null,
            readonly projectId: number
        },
        readonly errors: (string)[]
    } | null
};

export type DeleteActivity$input = {
    activityId: number
};