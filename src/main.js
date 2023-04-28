// :has() fallback function to make menu button works fine
if (!CSS.supports('body:has(*)')) {
  const body = document.querySelector('body');
	const menuBtn = document.querySelector('.menu-btn__btn');
	const leftSection = document.getElementById('left');
	leftSection.classList.add('left_has-not-checked');

	menuBtn.addEventListener('input', () => {
		const isChecked = menuBtn.checked;
		body.style.overflow = isChecked ? 'hidden' : 'auto';

		const btnWrapper = menuBtn.parentNode;
		if(isChecked) {
			leftSection.classList.remove('left_has-not-checked');
			btnWrapper.classList.add('menu-btn_has-checked');
			leftSection.classList.add('left_has-checked')
		} else {
			leftSection.classList.add('left_has-not-checked');
			btnWrapper.classList.remove('menu-btn_has-checked');
			leftSection.classList.remove('left_has-checked')
		}
	});
};
