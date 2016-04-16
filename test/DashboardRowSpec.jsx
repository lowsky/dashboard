import jsdom from 'jsdom';

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

let DashboardRow = require('../src/DashboardRow.jsx');
let BranchesTable = require('../src/BranchesTable.jsx');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

describe('Dashboard branch component', () => {

    describe('rendering', () => {
        let tableComp,
            dashComp;

        beforeEach(function () {
            tableComp = TestUtils.renderIntoDocument(<BranchesTable branches={['branchName']} />);
            dashComp = TestUtils.findRenderedComponentWithType(tableComp, DashboardRow);
        });

        it('should have class warning', () => {
            expect(ReactDom.findDOMNode(dashComp).className).to.equal('warning');
        });

        it('should have 2 columns', () => {
            let columns = TestUtils.scryRenderedDOMComponentsWithTag(dashComp, 'td');

            expect(columns.length).to.equal(2);
        });

        it('first column should contain the branchName', () => {
            let columns = TestUtils.scryRenderedDOMComponentsWithTag(dashComp, 'td'),
                firstColumn = columns[0],
                aLink = firstColumn.children[0];

            expect(aLink.textContent).to.equal('branchName');
        });
    });
});
