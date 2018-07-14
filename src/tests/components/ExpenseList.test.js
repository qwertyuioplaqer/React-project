import moment from 'moment';
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import toJSON from 'enzyme-to-json';

const expenses = [{
	id: '1',
	description: 'Gum',
	textarea: '',
	amount: 195,
	createdAt: 0
},{
	id: '2',
	description: 'Rent',
	textarea: '',
	amount: 109500,
	createdAt: moment(0).subtract(4,'days').valueOf()
},{
	id: '3',
	description: 'Credit card',
	textarea: '',
	amount: 4500,
	createdAt: moment(0).add(4,'days').valueOf()
}];

test('should render ExpenseList with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses} />);
	expect(wrapper).toMatchSnapshot();
});