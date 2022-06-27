import { useState, useRef, useEffect } from 'react';

function Counter({ step }) {
	const [count, setCount] = useState(0);
	const [name, setName] = useState(0);
	const headingRef = useRef();

	useEffect(() => {}, []);

	const increment = () =>
		setCount(
			prevCount => prevCount + step
		); /* Function version due to quick changes */
	const decrement = () => setCount(prevCount => prevCount - step);

	return (
		<>
			<h3 ref={headingRef} className={count < 0 ? 'red' : undefined}>
				{count}
			</h3>
			<button onPointerDown={increment}>Increment by {step}</button>
			<button onPointerDown={decrement}>Decrement by {step}</button>
		</>
	);
}

<Component1>
	<Component2>
		<Compent3></Compent3>
	</Component2>
</Component1>;

export default Counter;
