//  Блок галереї

let mainPhoto = document.querySelectorAll('.product__gallery-header__photo'),
    tabPhoto = document.querySelectorAll('.product__gallery-footer__photo');

function hideTab() {
    mainPhoto.forEach(item => {
        item.classList.remove('fade');
        item.classList.remove('show');
        item.classList.add('hide');
    });
}

function showTab(i) {
    mainPhoto[i].classList.remove('hide');
    mainPhoto[i].classList.add('show');
    mainPhoto[i].classList.add('fade');
}

tabPhoto.forEach((item, i) => {
    item.addEventListener('click', event => {
        event.preventDefault();
        hideTab();
        showTab(i);
    });
});



// Стилізація select.

let dropdownNav = document.querySelectorAll('.dropdown'),
    choiceResult = 0, // Записуємо обране значення з форми select.
    dropdownButton = document.querySelectorAll('.dropdown__button'),
    dropdownList = document.querySelectorAll('.dropdown__list'),
    dropdownItem = document.querySelectorAll('.dropdown__item');


function hideDropDown(i) {
    dropdownButton[i].classList.remove('active');
    dropdownList[i].classList.remove('show');
}

function toggleDropDown(i) {
    dropdownButton[i].classList.toggle('active');
    dropdownList[i].classList.toggle('show');
}

dropdownList.forEach((item, i) => {
    item.addEventListener('click', event => {
        choiceResult = event.target.dataset.value;
        dropdownButton[i].textContent = choiceResult;
        hideDropDown(i);
    });
});

dropdownButton.forEach((item, i) => {
    item.addEventListener('click', event => {
        toggleDropDown(i);
    });
});

document.addEventListener('click', (event) => {
    dropdownButton.forEach((item, i) => {
        if (event.target !== item) {
            hideDropDown(i);
        }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
        dropdownNav.forEach((item, i) => {
            hideDropDown(i);
        });
    }
});


// Закриття карти з товаром

let cart = document.getElementsByClassName('cart__item'),
    test = document.querySelectorAll('[data-cart]'),
    closeBtn = document.querySelectorAll('[data-close]'),
    massage = document.querySelector('.massage'),
    request = document.querySelector('.request');

    
closeBtn.forEach((item, i) => {
    item.addEventListener('click', event => {
        test[i].remove();
        console.log(cart);

        if (0 == cart.length) {
            massage.style.display = 'block';
            request.style.display = 'none';
        }
    });
});




