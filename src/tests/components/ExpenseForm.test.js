import moment from 'moment';
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';

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

test('should render ExpenseForm',() => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data',() => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('error for invalid form submit',() => {
	expect(wrapper).toMatchSnapshot();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	});
	expect(wrapper.state('errorForm')).toBe(true);
	expect(wrapper).toMatchSnapshot();
});

test('set description for input',() => {
	const value = 'New description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('description')).toBe(value);
});

test('set description for input',() => {
	const value = 'New textarea';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: {value}
	});
	expect(wrapper.state('textarea')).toBe(value);
});


test('set number for input',() => {
	const value = '4600';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('amount')).toBe(value);
});


test('should call valid submit', () => {
	const onSumbitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSumbitSpy} />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	});
	expect(wrapper.state('errorForm')).toBe(false);
	expect(onSumbitSpy).toHaveBeenLastCalledWith({
		description: 'Gum',
		textarea: '',
		amount: 195,
		createdAt: 0
	});
});

