import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

const now = moment();

export default class ExpenseForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			textarea: props.expense ? props.expense.textarea : '',
			amount: props.expense ? props.expense.amount : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			errorForm: false
		};
	}

	descriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }))
	};

	textareaChange = (e) => {
		const textarea = e.target.value;
		this.setState(() => ({ textarea }))
	};

	amountChange = (e) => {
		const amount = e.target.value;
		this.setState(() => ({ amount }))
	};

	onDateChange = (createdAt) => { 
		if(createdAt){
		this.setState({createdAt})
	}};

	onFocusChange = ({focused}) => {
		this.setState(() => ({calendarFocused: focused}))
	};

	onSubmit = (e) => {
		e.preventDefault();

		if( !this.state.description || !this.state.amount) {
			this.setState(() => ({errorForm : true}));
		} else{
			this.setState(() => ({errorForm : false}));
				this.props.onSubmit({
					description: this.state.description,
					amount: this.state.amount,
					createdAt: this.state.createdAt.valueOf(),
					textarea: this.state.textarea
				});

		}
	};
	render() {
		return (
			<div>
				{this.state.errorForm && <p>Please provide description and amount</p> }
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="Description" value={this.state.description}  autoFocus onChange={this.descriptionChange} /><br/>
					<input type="number" placeholder="Amount" onChange={this.amountChange} value={this.state.amount} /><br/>
					<SingleDatePicker
						date={this.state.createdAt} // momentPropTypes.momentObj or null
						onDateChange={this.onDateChange} // PropTypes.func.isRequired
						focused={this.state.calendarFocused} // PropTypes.bool
						onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					
					<textarea placeholder="Add a note for your expense (optional)" value={this.state.textarea} onChange={this.textareaChange}></textarea>
					<br/><button>Add Expense</button>
				</form>
			</div>
		);
	}
};