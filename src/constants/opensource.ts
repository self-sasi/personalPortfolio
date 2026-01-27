import { ContribMiniView, OpenSourceProject } from '@/types/opensource';

export const CONTRIBUTIONS: OpenSourceProject[] = [
    {
        name: "kubernetes/minikube",
        pullRequests: [
            {
                title: "chore: replace deprecated pflag ParseErrorsWhitelist with ParseErrorsAllowlist",
                status: "merged",
                link: "https://github.com/kubernetes/minikube/issues/22419"
            },
        ],
        numContribs: 1
    },
    {
        name: "facebook/pyrefly",
        pullRequests: [
            {
                title: "feat: make --remove-unused-ignores a no-op for files with no unused ignores",
                status: "merged",
                link: "https://github.com/facebook/pyrefly/commit/46a55b24629a0ce3ef2a5c52296916bc9aa1060c"
            },
            {
                title: "docs: fix relative pyrefly.org link in documentation",
                status: "merged",
                link: "https://github.com/facebook/pyrefly/commit/bdac377cc379d82c492bc563e010fbcf7fd150d9"
            }
        ],
        numContribs: 2
    },
    {
        name: "git-scope",
        pullRequests: [
            {
                title: "refactor: Improve Go Report Card score (target: A+) by addressing static analysis findings",
                status: "merged",
                link: "https://github.com/Bharath-code/git-scope/pull/12"
            }
        ],
        numContribs: 1
    }
]

const HIGHLIGHT_CONTRIBS: ContribMiniView[] = [
    {
        projectName: "facebook/pyrefly",
        pullRequestTitle: "feat: make --remove-unused-ignores a no-op for files with no unused ignores",
        status: "merged",
        link: "https://github.com/facebook/pyrefly/commit/46a55b24629a0ce3ef2a5c52296916bc9aa1060c"
    },
    {
        projectName: "kubernetes/minikube",
        pullRequestTitle: "chore: replace deprecated pflag ParseErrorsWhitelist with ParseErrorsAllowlist",
        status: "merged",
        link: "https://github.com/kubernetes/minikube/issues/22419"
    },
]

export const MINI_CONTRIBUTIONS: ContribMiniView[] = _normalizeMiniView(HIGHLIGHT_CONTRIBS)

function _normalizeMiniView(miniView: ContribMiniView[]): ContribMiniView[] {
    return miniView.map(miniContrib => {
        return {
            projectName: miniContrib.projectName,
            pullRequestTitle:
                miniContrib.pullRequestTitle.length > 6
                    ? miniContrib.pullRequestTitle.trim().split(/\s+/).slice(0, 6).join(" ") + "..."
                    : miniContrib.pullRequestTitle,
            status: miniContrib.status,
            link: miniContrib.link
        }
    })
}