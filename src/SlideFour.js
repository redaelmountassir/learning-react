import { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.increment.bind(this);
		this.decrement.bind(this);
	}

	componentDidMount() {
		/* Side Effects and Subscriptions */
	}
	componentWillUnmount() {
		/* Cleanup and Unsubscribe */
	}
	componentDidUpdate(prevProps, prevState) {
		/* Work with DOM or network interactions */
	}

	increment() {
		this.setState((state, { step }) => {
			return { count: state.count + step };
		});
	}

	decrement() {
		this.setState((state, { step }) => {
			return { count: state.count - step };
		});
	}

	render({ step }) {
		return (
			<>
				<h3>{this.state.count}</h3>
				<button onPointerDown={this.increment}>Increment by {step}</button>
				<button onPointerDown={this.decrement}>Decrement by {step}</button>
			</>
		);
	}
}

export default Counter;
