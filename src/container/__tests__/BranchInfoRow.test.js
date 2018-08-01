import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import BranchInfoRow from '../../container/BranchInfoRow';

describe('Dashboard branch component', () => {
    const BRANCH_NAME = 'someBranchName';
    const branch = {
        name: BRANCH_NAME,
    };
    const dashComp = shallow(<BranchInfoRow branch={branch} />);

    it('should render to a <tr> without className per default', () => {
        expect(dashComp.type()).toBe('tr');
    });

    it('should have 2 columns', () => {
        const columns = dashComp.find('td');

        expect(columns).toHaveLength(2);
    });

    it('first column should contain a link with text containing the branchName', () => {
        const firstColumn = dashComp.childAt(0);
        const aLink = firstColumn.find('a');

        expect(aLink.props().children).toBe(BRANCH_NAME);
    });
});
