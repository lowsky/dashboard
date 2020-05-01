/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type mainQueryVariables = {
    userName: string;
    repoName: string;
};
export type mainQueryResponse = {
    readonly github: {
        readonly " $fragmentRefs": FragmentRefs<"UserRepo_github">;
    } | null;
};
export type mainQuery = {
    readonly response: mainQueryResponse;
    readonly variables: mainQueryVariables;
};



/*
query mainQuery(
  $userName: String!
  $repoName: String!
) {
  github {
    ...UserRepo_github_3YBi4U
  }
}

fragment BranchInfoRow_branch on GithubBranch {
  name
  lastCommit {
    ...CommitWithStatuses_commit
  }
}

fragment BranchesTable_repo on GithubRepo {
  branches {
    ...BranchInfoRow_branch
  }
}

fragment CommitWithStatuses_commit on GithubCommit {
  sha
  message
  date
  status {
    context
    description
    state
    target_url
    updated_at
  }
}

fragment Repo_repo on GithubRepo {
  name
  owner {
    login
    id
  }
}

fragment UserRepo_github_3YBi4U on GithubAPI {
  user(username: $userName) {
    ...User_user
    id
  }
  repo(ownerUsername: $userName, name: $repoName) {
    ...Repo_repo
    ...BranchesTable_repo
  }
}

fragment User_user on GithubUser {
  login
  company
  avatar_url
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userName",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repoName",
    "type": "String!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GithubAPI",
        "kind": "LinkedField",
        "name": "github",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "repoName",
                "variableName": "repoName"
              },
              {
                "kind": "Variable",
                "name": "userName",
                "variableName": "userName"
              }
            ],
            "kind": "FragmentSpread",
            "name": "UserRepo_github"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "GraphQL_github_API"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GithubAPI",
        "kind": "LinkedField",
        "name": "github",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "username",
                "variableName": "userName"
              }
            ],
            "concreteType": "GithubUser",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "company",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatar_url",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "name",
                "variableName": "repoName"
              },
              {
                "kind": "Variable",
                "name": "ownerUsername",
                "variableName": "userName"
              }
            ],
            "concreteType": "GithubRepo",
            "kind": "LinkedField",
            "name": "repo",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "GithubUser",
                "kind": "LinkedField",
                "name": "owner",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "GithubBranch",
                "kind": "LinkedField",
                "name": "branches",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GithubCommit",
                    "kind": "LinkedField",
                    "name": "lastCommit",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "sha",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "message",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "date",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GithubStatus",
                        "kind": "LinkedField",
                        "name": "status",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "context",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "state",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "target_url",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "updated_at",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "mainQuery",
    "operationKind": "query",
    "text": "query mainQuery(\n  $userName: String!\n  $repoName: String!\n) {\n  github {\n    ...UserRepo_github_3YBi4U\n  }\n}\n\nfragment BranchInfoRow_branch on GithubBranch {\n  name\n  lastCommit {\n    ...CommitWithStatuses_commit\n  }\n}\n\nfragment BranchesTable_repo on GithubRepo {\n  branches {\n    ...BranchInfoRow_branch\n  }\n}\n\nfragment CommitWithStatuses_commit on GithubCommit {\n  sha\n  message\n  date\n  status {\n    context\n    description\n    state\n    target_url\n    updated_at\n  }\n}\n\nfragment Repo_repo on GithubRepo {\n  name\n  owner {\n    login\n    id\n  }\n}\n\nfragment UserRepo_github_3YBi4U on GithubAPI {\n  user(username: $userName) {\n    ...User_user\n    id\n  }\n  repo(ownerUsername: $userName, name: $repoName) {\n    ...Repo_repo\n    ...BranchesTable_repo\n  }\n}\n\nfragment User_user on GithubUser {\n  login\n  company\n  avatar_url\n}\n"
  }
};
})();
(node as any).hash = '1a9fad152056f68ccabd90be6f87a55c';
export default node;
