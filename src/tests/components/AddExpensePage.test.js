import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import moment from 'moment';

let onSubmit,history,wrapper;

beforeEach(() => {
	 onSubmit = jest.fn();
	 history = { push: jest.fn() };
	 wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)

});

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

test('should render AddExpensePage ', () => {
	expect(wrapper).toMatchSnapshot();
});

test('onSubmit addExpensePage', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});