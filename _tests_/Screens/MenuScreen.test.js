/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtt } from '../../Utils/test_utils';
import MenuScreen from '../../src/screens/MenuScreen';
import renderer from 'react-test-renderer';


// setup for shallow rendering component, saves having to do it in every test in this file
const  setup = (props = {}) =>
{
  const component = shallow(<MenuScreen {...props} />);
  return component;
};


describe('Renders the following components correctly: ', () =>
{

    let component;
    beforeEach(() =>
    {
        component = setup();
    });

    it('View test.', () =>
    {
        console.log(component.debug());
        const wrapper = findByTestAtt(component, 'MenuScreen_view');
        expect(wrapper.length).toBe(1);

    });
    it('Text test.', () =>
    {
        console.log(component.debug());
        const wrapper = findByTestAtt(component, 'MenuScreen_text');
        expect(wrapper.length).toBe(2);

    });

    it('Text test.', () =>
    {
        console.log(component.debug());
        const wrapper = findByTestAtt(component, 'MenuScreen_button');
        expect(wrapper.length).toBe(4);

    });

});
