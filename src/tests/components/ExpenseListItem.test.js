import moment from 'moment';
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';

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

test('should render ExpenseListItem with expense', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});