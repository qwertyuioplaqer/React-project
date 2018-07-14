import { createStore } from 'redux';

const decrementing = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const incrementing = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const setting = ({setBy} = {} ) => ({
	type: "SET",
	setBy
});

const resetting = ({resetBy = 0} = {} ) => ({
	type: "RESET",
	resetBy
});



const store = createStore( (state = { count: 0}, action) => {
	switch (action.type){
		case 'INCREMENT':
			return {
				count: state.count - action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count + action.decrementBy
			};
		case 'RESET':
		
			return{
				count: state.count = action.resetBy 
			}
		case 'SET':
			return{
				count: state.count = action.setBy
			}
		default: 
		return state;
	}
});


const unsub = store.subscribe( () => {
	console.log(store.getState());
});

store.dispatch(incrementing());

store.dispatch(decrementing({decrementBy: 1000}));



store.dispatch(incrementing({incrementBy: 50}));




store.dispatch(resetting());


store.dispatch(setting({setBy: 123}));

