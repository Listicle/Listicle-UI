export type getProjects = {
    readonly "input": null,
    readonly "result": getProjects$result
};

export type getProjects$result = {
    readonly user: {
        readonly id: string,
        readonly username: string | null,
        readonly projectsCount: number | null,
        readonly projects: ({
            readonly id: string,
            readonly projectName: string | null
        })[] | null
    }
};