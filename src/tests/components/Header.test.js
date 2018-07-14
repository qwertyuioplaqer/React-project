import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';

test('should render header',() => {
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
	
	const wrapper = shallow(<Header />);
	// expect(wrapper.find('h1').length).toBe(1);
	expect(toJSON(wrapper)).toMatchSnapshot();

});