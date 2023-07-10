////// Стилізація select.
let dropdownNav = document.querySelectorAll('.dropdown');
let choiceResult = 0; // Записуємо обране значення з форми select.

dropdownNav.forEach( item => {
    
    let dropdownButton = item.querySelector('.dropdown__button');
    let dropdownList = item.querySelector('.dropdown__list');
    let dropdownItem = dropdownList.querySelectorAll('.dropdown__item');

    function closeDropdown() {
        dropdownButton.classList.remove('active');
        dropdownList.classList.remove('show');
    }

    dropdownButton.addEventListener('click', (event) => {
        dropdownButton.classList.toggle('active');
        dropdownList.classList.toggle('show');
    });

    dropdownItem.forEach(item => {
        item.addEventListener('click', event => {
            choiceResult = event.target.dataset.value;
            closeDropdown();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab' || event.key === 'Escape') {
            closeDropdown();
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target !== dropdownButton) {
            choiceResult = event.target.dataset.value;
            closeDropdown();
        }
    });
});
