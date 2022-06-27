import { useState } from 'react';
import styles from './counter.module.css';

const StyledCounter = ({ step }) => {
	/* Arrow Notation */
	const [count, setCount] = useState(0);

	const increment = () =>
		setCount(
			prevCount => prevCount + step
		); /* Function version due to quick changes */
	const decrement = () => setCount(prevCount => prevCount - step);

	return (
		<>
			<h3 className={count < 0 ? styles.red : undefined}>{count}</h3>
			<button onPointerDown={increment}>Increment by {step}</button>
			<button onPointerDown={decrement}>Decrement by {step}</button>
		</>
	);
};

export default StyledCounter;
