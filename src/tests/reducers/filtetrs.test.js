import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('sort by amount',() => {
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');
});

test('sort by  date',() => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'date'
	};
	const action = {type: 'SORT_BY_DATE'};
	const state = filtersReducer(currentState,action);
	expect(state.sortBy).toBe('date')
});


test('sort by  text',() => {
	const currentState = {
		text: 'rent',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'date'
	};
	const action = {type: 'SORT_BY_TEXT'};
	const state = filtersReducer(currentState,action);
	expect(state.text).toBe('rent');
});

test('sort by  startDate',() => {
	const startDate = moment();
	const action = {type: 'SET_START_DATE',startDate};
	const state = filtersReducer(undefined,action);
	expect(state.startDate).toEqual(startDate);
});

test('sort by  endDate',() => {
	const endDate = moment();
	const action = {type: 'SET_END_DATE',endDate};
	const state = filtersReducer(undefined,action);
	expect(state.endDate).toEqual(endDate);
});