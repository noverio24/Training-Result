const withConstructor = constructor => o => ({
	// create the delegate [[Prototype]]
	__proto__: {
		// add the constructor prop to the new [[Prototype]]
		constructor
	},
	// mix all o's props into the new object
	...o
});

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const delay = (m, fn) => new Promise(r => setTimeout(r, m));

const assess = conditions => {
	let passed = true;

	if(['string', 'boolean', 'number'].includes(typeof conditions) )
	{
		passed = !!conditions;
	}
	else if(Array.isArray(conditions))
	{
		for (const [, fn] of conditions.entries()) {
			if (('function' == typeof fn) && (fn.call() === false)) {
				passed = false;
				break;
			}
		}
	}
	
	return passed;
};

export {
	withConstructor,
	pipe,
	delay,
	assess
}