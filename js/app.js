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
		let inputs = [...getRGBAValues(1), ...getRGBAValues(2)];
		let [r1, g1, b1, alpha1, r2, g2, b2, alpha2] = inputs.map(input => +(input.value));
		document.querySelector('.gradient').style.background = `linear-gradient(150deg, rgba(${r1}, ${g1}, ${b1},${(+alpha1).toFixed(2)}),
																																						   rgba(${r2}, ${g2}, ${b2},${(+alpha2).toFixed(2)}))`;
	}

	document.querySelector('.gradient').style.background = `linear-gradient(90deg, rgba(134, 196, 113, 0.992157), rgba(20, 55, 96, 0.992157))`;

	inputs.forEach(input => input.addEventListener('change', e => {
		isDown = true;
		changeColor(e);
		isDown = false;
	}));

	inputs.forEach(input => input.addEventListener('mousemove', e => {
		if(isDown)
			changeColor(e);
	}));

	inputs.forEach(input => input.addEventListener('mouseover', e => {
		if(isDown)
			changeColor(e);
	}));

	inputs.forEach(input => input.addEventListener('mousedown', () => isDown = true));

	inputs.forEach(input => input.addEventListener('mouseout', () => isDown = false));

	inputs.forEach(input => input.addEventListener('mouseup', () => isDown = false));
});
