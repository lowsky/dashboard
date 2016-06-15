import React from 'react';
import ReactDOM from 'react-dom';

import Relay from 'react-relay';

const repo = 'lowsky/dashboard';

let content = document.getElementById('content');

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:8000/graphql', {
        fetchTimeout: 45000,   // Timeout after 30s.
        retryDelays: [3000]   // Only retry once after a 5s delay.
    })
);


const Repo = React.createClass({
    render: function () {
        const {repo = {}} = this.props; // same as in // fragments ['repo']
        return (<div> {repo.owner.login} / {repo.name} </div>);
    }
});

const RepoContainer = Relay.createContainer(Repo, {
    fragments: {
        repo: () => Relay.QL`
            fragment on GithubRepo {
                name
                owner {
                    login
                }
            }
        `
    },
    name: 'Repo'
});

let UserRepo = React.createClass({
    render: function () {
        const user = {};
        const { github = {user, repo} } = this.props;
        return (
            <div>
                <div className="panel-default">
                    <div className="panel-heading">
                        <h1 className="panel-title"> Repository: </h1>
                    </div>
                    <div className="panel-body">
                        <RepoContainer repo={github.repo}/>
                    </div>
                </div>
                <div className="panel-default">
                    <div className="panel-heading">
                        <h1 className="panel-title">Owner:</h1>
                    </div>
                    <div className="panel-body">
                    </div>
                </div>
                <div className="panel-default">
                    <div className="panel-body">
                    </div>
                </div>
            </div>)
    }
});

let UserRepoContainer = Relay.createContainer(UserRepo, {
    initialVariables: {
        username: 'lowsky',
        ownerUsername: 'lowsky',
        repoName: 'dashboard'
    },
    fragments: {
        github: () => Relay.QL`
          fragment on GithubAPI {
           user(username:$username) {
              login
            }
                repo(ownerUsername: $ownerUsername, name: $repoName) {
                    name
                    ${RepoContainer.getFragment('repo')}
            }
          }
        `
    },
    name: 'UserRepo'
});

let raleyRoot = (
    <Relay.RootContainer
        Component={UserRepoContainer}
        route={
                {
                    queries: {
                        github: () => Relay.QL`
                            query { github }
                        `
                    },
                    name: 'UserRepo',
                    params: {
                         extraProps: 'availableInAnyClientRender'
                    }
                }
            }
    />
);

let renderOrUpdateBranches = () => {
    ReactDOM.render(
        <div className="panel-default">
            {
                raleyRoot
            }
        </div>,
        content);
};

renderOrUpdateBranches([]);


// old:
// https://api.github.com/repos/lowsky/dashboard/branches
