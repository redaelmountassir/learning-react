import { useState } from 'react';

const Counter = ({ step }) => {
	/* Arrow Notation */
	const [count, setCount] = useState(0);

	const increment = () =>
		setCount(
			prevCount => prevCount + step
		); /* Function version due to quick changes */
	const decrement = () => setCount(prevCount => prevCount - step);

	return (
		<>
			<h3 className={count < 0 ? 'red' : undefined}>{count}</h3>
			<button onPointerDown={increment}>Increment by {step}</button>
			<button onPointerDown={decrement}>Decrement by {step}</button>
		</>
	);
};

export default Counter;
