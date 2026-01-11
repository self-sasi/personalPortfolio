export type PullRequest = {
    title: string
    status: "merged" | "open"
    link: string
}

export type OpenSourceProject = {
    name: string,
    pullRequests: PullRequest[],
    numContribs: number
}

export type ContribMiniView = {
    projectName: string,
    pullRequestTitle: string,
    status: "merged" | "open",
    link: string
}