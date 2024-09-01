//your JS code here. If required.
const domLevel = (element) => {
	const level = 0;
	while(element.parentNode !== null) {
		level++;
		element = element.parentNode;
	}
	return level;
}
const target = document.getElementById('level');
const Dlevel = domLevel(target);
alert(`The level of the element is: ${Dlevel}`);