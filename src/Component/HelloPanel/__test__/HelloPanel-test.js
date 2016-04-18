/**
 * Created by ebinhon on 4/18/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import HelloPanel from '../HelloPanel';

describe('HelloPanel', function () {
    it('renders without problems', function () {
        var helloPanel = TestUtils.renderIntoDocument(<HelloPanel name="React"/>);
        expect(helloPanel).toExist();

        const testNode = ReactDOM.findDOMNode(helloPanel);

        expect(testNode.textContent).toEqual('Hello React!');

    });
});