import UILibContext from '../components/UILibContext';
import UserRepo from '../container/UserRepo';

import { UILibPureComponents } from '../components';

const userWithoutAvatar = {
    login: 'login',
    id: '1234',
    company: 'company',
};
const userWithAvatar = {
    ...userWithoutAvatar,
    avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
};

const commitData = {
    user: {
        ...userWithoutAvatar,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
    commit: {
        sha: 'no-sha',
        date: 'no-date',
        message: 'no-message',
        status: [],
        author: {
            ...userWithAvatar.user,
            email: 'me@work',
            name: 'My-Name',
        },
    },
};

const branchInfo = {
    branch: {
        name: 'branch-x',
        lastCommit: commitData.commit,
    },
};

const branches = {
    repo: { branches: [branchInfo.branch] },
};

const repo = {
    repo: {
        owner: userWithAvatar.user,
        name: 'demo-repo',
        branches: branches.repo.branches,
    },
};

const userRepo = {
    github: {
        user: userWithAvatar.user,
        repo: repo.repo,
    },
};

export default {
    title: 'Others/UserRepo',
    component: UserRepo,
};

export const WithUserAndRepo = () => (
    <UILibContext.Provider value={UILibPureComponents}>
        <UserRepo {...userRepo} />
    </UILibContext.Provider>
);

WithUserAndRepo.storyName = 'with user and repo';
