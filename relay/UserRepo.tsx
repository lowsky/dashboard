import { createFragmentContainer, graphql } from 'react-relay';

import UserRepo from '../container/UserRepo';

export default createFragmentContainer(UserRepo, {
    github: graphql`
        fragment UserRepo_github on GithubAPI
            @argumentDefinitions(
                userName: { type: "String", defaultValue: "lowsky" }
                repoName: { type: "String", defaultValue: "dashboard" }
            ) {
            user(username: $userName) {
                ...User_user
            }
            repo(ownerUsername: $userName, name: $repoName) {
                ...Repo_repo
                ...BranchesTable_repo
            }
        }
    `,
});
