import { ContribMiniView, OpenSourceProject } from '@/types/opensource';

// TODO: implement a way to automate numContribs calculation. the change might require changing OpenSourceProject
// type in @/types/opensource.

export const CONTRIBUTIONS: OpenSourceProject[] = [
    {
        name: "facebook/pyrefly",
        pullRequests: [
            {
                title: "fix: avoid adding parameters for variables defined in the selection during helper extraction",
                status: "merged",
                link: "https://github.com/facebook/pyrefly/commit/82f3b2239a24ea6ac543367b95b82d4f625d1155"
            },
            {
                title: "feat: make --remove-unused-ignores a no-op for files with no unused ignores",
                status: "merged",
                link: "https://github.com/facebook/pyrefly/commit/46a55b24629a0ce3ef2a5c52296916bc9aa1060c"
            },
            {
                title: "docs: add pyrefly_graph to Code Layout section in README",
                status: "merged",
                link: "https://github.com/facebook/pyrefly/commit/d110c95690a0fb750e2ce750b2ed58c5b92d0562"
            },
            {
                title: "docs: fix relative pyrefly.org link in documentation",
                status: "merged",
                link: "https://github.com/facebook/pyrefly/commit/bdac377cc379d82c492bc563e010fbcf7fd150d9"
            }
        ],
        numContribs: 4
    },
    {
        name: "google/magika",
        pullRequests: [
            {
                title: "web: add Homebrew install option to CLI installation tabs",
                status: "merged",
                link: "https://github.com/google/magika/pull/1275"
            },
            {
                title: "docs: add Homebrew installation method for CLI",
                status: "merged",
                link: "https://github.com/google/magika/pull/1274"
            }
        ],
        numContribs: 2
    },
    {
        name: "open-telemetry/opentelemetry-java-instrumentation",
        pullRequests: [
            {
                title: "refactor: migrate ktor-2-common module to updated -common module conventions",
                status: "open",
                link: "https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16308"
            },
            {
                title: "refactor: standardize -common module (rxjava-3-common → rxjava-common-3.0)",
                status: "merged",
                link: "https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16284"
            },
        ],
        numContribs: 2
    },
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
        pullRequestTitle: "fix: avoid adding parameters for variables defined in the selection during helper extraction",
        status: "merged",
        link: "https://github.com/facebook/pyrefly/commit/82f3b2239a24ea6ac543367b95b82d4f625d1155"
    },
    {
        projectName: "facebook/pyrefly",
        pullRequestTitle: "feat: make --remove-unused-ignores a no-op for files with no unused ignores",
        status: "merged",
        link: "https://github.com/facebook/pyrefly/commit/46a55b24629a0ce3ef2a5c52296916bc9aa1060c"
    }
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
