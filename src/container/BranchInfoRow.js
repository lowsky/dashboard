import React from 'react';
import PropTypes from 'prop-types';

import Ui from '../components';
import octocat from './octocat.jpg';

const BranchInfoRow = props => {
    const { branch = {} } = props;
    const { name, lastCommit = {} } = branch;
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;

    const CommitWithStatuses = Ui.createCommitWithStatuses(props);

    return (
        <tr key={name}>
            <td>
                <img src={octocat} width="32" alt="link to branch on github" />
                <a href={githubBranchSrc}>{name}</a>
            </td>
            <td>{<CommitWithStatuses commit={lastCommit} />}</td>
        </tr>
    );
};

BranchInfoRow.propTypes = {
    branch: PropTypes.shape({
        name: PropTypes.string,
        lastCommit: PropTypes.object,
    }),
};

export default BranchInfoRow;
