document.addEventListener('DOMContentLoaded',function() {

	const getRGBAValues = i =>
			[
				document.querySelector(`[name=r${i}]`),
				document.querySelector(`[name=g${i}]`),
				document.querySelector(`[name=b${i}]`),
				document.querySelector(`[name=alpha${i}]`)
			];

	let isDown = false;
	let inputs = [...getRGBAValues(1), ...getRGBAValues(2)];

	function changeColor(e) {
		if(!isDown) return;
		const [name, value] = [e.target.name, e.target.value];
		let temp = {};
		temp[name] = e.target.valueAsNumber;
		rgbs = Object.assign({},rgbs, temp);
		document.querySelector('.gradient').style.background = `linear-gradient(150deg, rgba(${rgbs.r1}, ${rgbs.g1}, ${rgbs.b1},${rgbs.alpha1.toFixed(2)}),
																																						   rgba(${rgbs.r2}, ${rgbs.g2}, ${rgbs.b2},${rgbs.alpha2.toFixed(2)}))`;
	}

	document.querySelector('.gradient').style.background = `linear-gradient(90deg, rgba(134, 196, 113, 0.992157), rgba(20, 55, 96, 0.992157))`;
	let [r1, g1, b1, alpha1, r2, g2, b2, alpha2] = inputs.map(input => input.value);
	let rgbs = {
		r1: +r1,
		g1: +g1,
		b1: +b1,
		alpha1: +alpha1,
		r2: +r2,
		g2: +g2,
		b2: +b2,
		alpha2: +alpha2
	};

	inputs.forEach(input => input.addEventListener('change', e => {
		isDown = true;
		changeColor(e);
		isDown = false;
	}));

	inputs.forEach(input => input.addEventListener('mousemove', e => {
		if(isDown)
			changeColor(e);
	}));

	inputs.forEach(input => input.addEventListener('mousedown', () => isDown = true));

	inputs.forEach(input => input.addEventListener('mouseleave', () => isDown = false));

	inputs.forEach(input => input.addEventListener('mouseup', () => isDown = false));
});
