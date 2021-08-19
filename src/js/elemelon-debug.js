function loadDebug(href) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", href, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}

const debugContainer = document.createElement('div');
document.body.appendChild(debugContainer);
debugContainer.className = 'elements-debug';
debugContainer.innerHTML = loadDebug('../src/includes/elements-debug.html');


function windowSize() {
	const widthOutput = document.querySelector('.window-width');
	const heightOutput = document.querySelector('.window-height');
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	widthOutput.textContent = windowWidth + 'px';
	heightOutput.textContent = windowHeight + 'px';
}

window.onload = windowSize;
window.onresize = windowSize;