export default () => {
	const openButton = document.getElementById('openButton');
	const settingsMenu = document.getElementById('settingsMenu');

	openButton.onclick = () => settingsMenu.showModal();

	settingsMenu.addEventListener('input', (event) => {
		const control = event.target;
		const valueEl = document.getElementById(`${control.id}Value`);
		document.documentElement.style.setProperty('--initial-padding-top', `${control.value}px`);
		valueEl.textContent = control.value;
	})
}
