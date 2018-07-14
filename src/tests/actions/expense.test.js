import { addExpense , editExpense , removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense( {id : 'asvas123'} );
	expect(action).toEqual({ type: 'REMOVE_EXPENSE' , id: 'asvas123'});
});

test('should setup edit expense action object', () => {
	const action = editExpense( 'asvas123', {description: 'new description'} );
	expect(action).toEqual( {type: 'EDIT_EXPENSE',id : 'asvas123', updates : {description: 'new description'}} );
});

test('should setup add expense action object with provides values',() => {
	const expenseData = {
		description: 'Rent',
		amount: 100523,
		createdAt: 1000
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: { 
			...expenseData,
			id: expect.any(String)
		}
	})

});

test('should setup add expense action object with default values',() => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			amount: 0,
			createdAt: 0
		}
	});
});