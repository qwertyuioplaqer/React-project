import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', createdAt: 239}));

store.dispatch(addExpense({description: 'gas bill', amount: 34002, createdAt: 100}));

store.dispatch(addExpense({description: 'rent', amount: 3234002}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx,document.getElementById("app"));
























//HOC



// const Info = (props) => (
// 	<div>
// 		<h1>Info</h1>
// 		<p>The info is: {props.info}</p>
// 	</div>
// );


// const UserAuthent = (props) => (
// 	<div>
// 		<h1>User Info</h1>
// 		<p>User auth: {props.userAUTH && <span>TRUE</span>} </p>
// 	</div>
// );

// const userAuth = (WrappedComponent) => {
// 	return (props) => (
// 		<div>
// 		{props.userAUTH && <p>user name: {props.name}</p>}
// 		<WrappedComponent {...props} />
// 		</div>
// 	);
// }

// const withAdminWarning = (WrappedComponent) => {
// 	return (props) => (
// 		<div>
// 			{props.isAdmin && <p>This is private info.</p>}
			
// 			<WrappedComponent {...props} />
// 		</div>
// 	);
// };


// const UserInfo = userAuth(UserAuthent)
// // const AdminInfo = withAdminWarning(Info);

//  ReactDOM.render(<UserInfo userAUTH={false} name="Slava"  info="details" />,document.getElementById('app'));