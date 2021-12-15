export type DestroyActivity = {
    readonly "input": DestroyActivity$input,
    readonly "result": DestroyActivity$result
};

export type DestroyActivity$result = {
    readonly destroyActivity: {
        readonly activity: {
            readonly id: string,
            readonly status: string,
            readonly title: string | null
        },
        readonly errors: (string)[]
    } | null
};

export type DestroyActivity$input = {
    activityId: number
};