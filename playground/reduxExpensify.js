import { createStore , combineReducers } from 'redux';

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

let expenseOne = store.dispatch(addExpense({description : 'rent' , amount: 2000, createdAt: -5000}));

let expenseTwo = store.dispatch(addExpense({description : 'easy suka bleat' , amount: 5000, createdAt: 9999}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 2300} ));

// store.dispatch(setTextFilter('easy'));

// store.dispatch(sortByAmount());

store.dispatch(sortByDate());

// store.dispatch(setStartDate(-00123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1212));

const demoState = {
	expenses: [{
		id: 'sdasd',
		description: 'sdasdasdas',
		note: 'asdasdasdasdas',
		amount: 545000,
		createdAt: 0
	}],
	filters: {
		text: 'sdasd',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};
