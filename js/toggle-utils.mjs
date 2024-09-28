'use strict';

const toggleUtils = {
    toggleClass(el, className) {
        el.classList.toggle(className);
    },

    addClass(el, className) {
        el.classList.add(className);
    },

    removeClass(el, className) {
        el.classList.remove(className);
    },
};

document.addEventListener('click', function (evt) {
    const dropdown = document.getElementById('navMenu');
    const clickedOnDropdown = evt.target.classList.contains('dropdown');

    if (!clickedOnDropdown) toggleUtils.addClass(dropdown, 'hidden');
    if (clickedOnDropdown) toggleUtils.toggleClass(dropdown, 'hidden');
});

export default toggleUtils;
