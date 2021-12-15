export type UpdateActivityStatus = {
    readonly "input": UpdateActivityStatus$input,
    readonly "result": UpdateActivityStatus$result
};

export type UpdateActivityStatus$result = {
    readonly updateActivity: {
        readonly activity: {
            readonly id: string,
            readonly status: string,
            readonly title: string | null,
            readonly projectId: number
        },
        readonly errors: (string)[]
    } | null
};

export type UpdateActivityStatus$input = {
    activityStatus: string,
    activityId: string
};