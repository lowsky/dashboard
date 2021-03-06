import React from 'react';

import BranchesTable from './BranchesTable';

import { UILibPureComponents } from '../components';

import UILibContext from '../components/UILibContext';

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
    name: 'branch-x',
    lastCommit: commitData.commit,
};

export default {
    title: 'Others/BranchesTable',
    component: BranchesTable,
};

export const WithOneBranch = () => (
    <UILibContext.Provider value={UILibPureComponents}>
        <BranchesTable repo={{ branches: [branchInfo] }} />
    </UILibContext.Provider>
);
WithOneBranch.storyName = 'with one branch';
