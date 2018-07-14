import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

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


test('should set default state',() => {
	const state = expensesReducer(undefined,{type: '@@INIT' });
	expect(state).toEqual([]);
});

test('remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses,action)
	expect(state).toEqual([expenses[0],expenses[2]]);
});

test('not remove expense if not found id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '12312312312312312312312312312312312'
	};
	const state = expensesReducer(expenses,action)
	expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
});


test('add expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
	};
	const expenseNew = {
		id: '3',
		description: 'Guim',
		textarea: '',
		amount: 1095200,
		createdAt: moment(0).subtract(4,'days').valueOf()
	};
	const state = expensesReducer(expenses,action)
	expect(state).toEqual([expenses[0],expenses[1],expenses[2],expenses[3]]);
});


test('edit expense', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			id: '5',
			description: 'new description'
		}
	};
	const state = expensesReducer(expenses,action)
	expect(state[2].id).toBe('5');
});

test('edit expense default not right id', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '132312312312',
		updates: {
			id: '21312'
		}
	};
	const state = expensesReducer(expenses,action)
	expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
});