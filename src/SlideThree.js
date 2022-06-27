const CustomElement = ({ children, border }) => (
	<div style={border && { border: '1px solid red' }}>{children}</div>
);

const condition = true;

const names = ['billy', 'bobby', 'willy', 'wobby?'];

const onClick = e => alert(e);

<CustomElement border>
	<div className='i-made-this-up' id='any-id'></div>
	{condition && <h1>I am a conditional heading</h1>}
	<p style={{ color: 'green', fontSize: condition ? '1rem' : '2rem' }}></p>
	<button onClick={onClick}></button>
	{names.map(name => (
		<p>{name}</p>
	))}
</CustomElement>;
