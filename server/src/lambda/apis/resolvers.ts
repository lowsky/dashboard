import {
    getBranchesForRepo,
    getCommitsForRepo,
    getRepoForUser,
    getReposForUser,
    getStatusesForRepo,
    getUser,
} from './github';

export const resolvers = {
    GithubCommit: {
        status: (commit) => {
            // eslint-disable-next-line no-unused-vars
            const { username, reponame } = grabUsernameAndReponameFromURL(commit.url);
            const { sha } = commit;
            return getStatusesForRepo(username, reponame, sha) ?? [];
        },
    },

    GithubBranch: {
        lastCommit: (branch) => {
            const { ownerUsername, reponame } = branch; // info has been added while loading
            return getCommitsForRepo(ownerUsername, reponame, branch.sha)
                .then((list) => {
                    console.log({ list });

                    return list[0];
                })
                .then((commit) => {
                    console.error(commit.commit);

                    const lastCom = {
                        ...commit,
                        message: commit.commit.message,
                        date: commit.commit.committer.date,
                    };
                    return lastCom;
                });
        },
    },
    UserOrCommitAuthor: {
        __resolveType(obj) {
            if (obj.__typename === 'GithubUser') {
                return 'GithubUser';
            }
            return 'GithubCommitAuthor';
        },
    },
    GithubUser: {
        id: (user) => {
            return String(user.id);
        },
        repos: (user) => {
            return getReposForUser(user.login);
        },
    },
    GithubRepo: {
        branches: (repo, { limit }) => {
            const reponame = repo.name;
            const ownerUsername = repo.owner?.login;
            return getBranchesForRepo(ownerUsername || '', reponame || '')
                .then((branches) => {
                    // add repo referenceData
                    return branches.map((b) => ({
                        reponame,
                        ownerUsername,
                        ...b,
                    }));
                })
                .then((branches) => {
                    if (limit) {
                        return branches.slice(0, limit);
                    }
                    return branches;
                });
        },
        commits: (repo) => {
            return getCommitsForRepo(repo.owner?.login, repo.name).then((commitList) => {
                return commitList.map((commit) => {
                    console.log(commit.commit);
                    return {
                        ...commit,
                        message: commit.commit.message,
                        // date: commit.commit.commiter.date,
                    };
                });
            });
        },
    },
    Query: {
        github: () => {
            return {};
        },
    },
    GithubAPI: {
        user: (parent, { username }) => {
            return getUser(username);
        },
        repo: (parent, { ownerUsername, name }) => {
            return getRepoForUser(ownerUsername, name);
        },
    },
    /*
    GithubTreeEntry: {
      last_commit: (parent) => {
              const path = parent.path;
              const { username, reponame } = grabUsernameAndReponameFromURL(parent.url);
              return getCommitsForRepo(username, reponame, { path, limit: 1 }).then((list) => list[0]); // just the commit object
    },
    GithubTree: {},
    */
};

const grabUsernameAndReponameFromURL = (url) => {
    let array = url.split('https://api.github.com/repos/')[1].split('/');
    return {
        username: array[0],
        reponame: array[1],
    };
};