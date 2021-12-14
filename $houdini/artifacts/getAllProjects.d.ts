export type getAllProjects = {
    readonly "input": null,
    readonly "result": getAllProjects$result
};

export type getAllProjects$result = {
    readonly user: {
        readonly id: string,
        readonly username: string | null,
        readonly projectsCount: number | null,
        readonly projects: ({
            readonly id: string,
            readonly projectName: string | null,
            readonly activities: ({
                readonly id: string,
                readonly title: string | null,
                readonly status: number | null,
                readonly tasksCount: number | null,
                readonly tasks: ({
                    readonly id: string,
                    readonly taskName: string | null,
                    readonly completed: boolean | null
                })[] | null
            })[] | null
        })[] | null
    }
};