import { ContribMiniView, OpenSourceProject } from '@/types/opensource';

export const CONTRIBUTIONS : OpenSourceProject[] = [
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
                title: "fix: make --remove-unused-ignores a no-op for files with no unused ignores",
                status: "open",
                link: "https://github.com/facebook/pyrefly/pull/2217"
            },
            {
                title: "docs: fix relative pyrefly.org link in documentation",
                status: "open",
                link: "https://github.com/facebook/pyrefly/pull/2186"
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

export const MINI_CONTRIBUTIONS : ContribMiniView[] = _toMiniView(CONTRIBUTIONS)

export function _toMiniView(projects: OpenSourceProject[]): ContribMiniView[] {
  const miniViewArray: ContribMiniView[] = [];

  for (const project of projects) {
    for (const contrib of project.pullRequests) {
      const words = contrib.title.trim().split(/\s+/);
      const trimmedTitle =
        words.length > 6
          ? words.slice(0, 6).join(" ") + "..."
          : contrib.title;

      miniViewArray.push({
        projectName: project.name,
        pullRequestTitle: trimmedTitle,
        status: contrib.status,
        link: contrib.link,
      });
    }
  }

  return miniViewArray;
}
