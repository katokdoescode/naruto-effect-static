// :has() fallback function to make menu button works fine
if (!CSS.supports('body:has(*)')) {
  const body = document.querySelector('body');
	const menuBtn = document.querySelector('.menu-btn__btn');
	const leftSection = document.getElementById('left');
	leftSection.setAttribute('menu-is-open', menuBtn.checked);

	menuBtn.addEventListener('input', () => {
		const isChecked = menuBtn.checked;
		body.style.overflow = isChecked ? 'hidden' : 'auto';
		leftSection.setAttribute('menu-is-open', menuBtn.checked);
		const btnWrapper = menuBtn.parentNode;

		if(isChecked) {
			btnWrapper.classList.add('menu-btn_has-checked');
			btnWrapper.setAttribute('aria-expanded', isChecked)
		} else {
			btnWrapper.classList.remove('menu-btn_has-checked');
			btnWrapper.setAttribute('aria-expanded', isChecked)
		}
	});

	menuBtn.addEventListener('focusin', () => {
		const btnWrapper = menuBtn.parentNode;
		if(menuBtn.matches(':focus-visible'))
			btnWrapper.classList.add('menu-btn_has-focus-visible');
	});

	menuBtn.addEventListener('focusout', () => {
		const btnWrapper = menuBtn.parentNode;
		btnWrapper.classList.remove('menu-btn_has-focus-visible');
	});
};
