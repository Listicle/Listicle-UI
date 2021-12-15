export type getSingleProject = {
    readonly "input": getSingleProject$input,
    readonly "result": getSingleProject$result
};

export type getSingleProject$result = {
    readonly project: {
        readonly id: string,
        readonly projectName: string | null,
        readonly activitiesCount: number | null,
        readonly activities: ({
            readonly id: string,
            readonly projectId: number,
            readonly title: string | null,
            readonly tasksCount: number | null,
            readonly tasks: ({
                readonly id: string,
                readonly activityId: number,
                readonly taskName: string | null
            })[] | null
        })[] | null
    }
};

export type getSingleProject$input = {
    ID: string
};