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

        if (0 == cart.length) {
            massage.style.display = 'block';
            request.style.display = 'none';
        }
    });
});


//  Валідація форми

let form = document.querySelector('#form'),
    userName = document.querySelector('#username'),
    phone = document.querySelector('#phone'),
    country = document.querySelector('#country'),
    city = document.querySelector('#city'),
    postIndex = document.querySelector('#post-index');



const setError = (element, massage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form__error');

    errorDisplay.innerText = massage;
    inputControl.classList.add('error'),
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form__error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


form.addEventListener('submit', event => {
    event.preventDefault();

    validateInputs();
});

const isValidPhone = phone => {
    const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return re.test(String(phone));
};


const isValidPostIndex = index => {
    const re = /^\d{5}(?:[-\s]\d{4})?$/;
    return re.test(String(index));
};


const isValidCity = city => {
    const re = /^[a-zа-яё\s]+$/iu;
    return re.test(String(city));
};

const isValidCountry = city => {
    const re = /^[a-zа-яё\s]+$/iu;
    return re.test(String(city));
};

const isValidUserName = username => {
    const re = /^[a-zа-яё\s]+$/iu;
    return re.test(String(username));
};


const validateInputs = () => {
    const usernameValue = userName.value.trim(),
          phoneValue = phone.value.trim(),
          countryValue = country.value.trim(),
          cityValue = city.value.trim(),
          postIndexValue = postIndex.value.trim();

    if(usernameValue === '') {
        setError(userName, 'Укажите пожалуйста имя');
    } else if (!isValidUserName(usernameValue)) {
        setError(userName, 'Имя не может состоять из цифр');
    } else if (usernameValue.length < 4) {
        setError(userName, 'ФИО должно иметь минимум четыре символа');
    } else {
        setSuccess(userName);
    }
    

    if(phoneValue === '') {
        setError(phone, 'Укажите пожалуйста мобильный телефон');
    } else if (!isValidPhone(phoneValue)){
        setError(phone, 'Укажите пожалуйста мобильный телефон в корректном формате');
    } else {
        setSuccess(phone);
    }

    if(countryValue === '') {
        setError(country, 'Укажите пожалуйста страну');
    } else if (!isValidCountry(countryValue)) {
        setError(country, 'Название страны должно состоять только из букв');
    } else if (countryValue.length < 2) {
        setError(country, 'Название страны минимум из двух символов');
    } else {
        setSuccess(country);
    }

    if(cityValue === '') {
        setError(city, 'Укажите пожалуйста город');
    } else if (!isValidCity(cityValue)) {
        setError(city, 'Название города должно состоять только из букв');
    } else if (cityValue.length < 2){
        setError(city, 'Название города должно состоять минумум из двух символов');
    } else {
        setSuccess(city);
    }

    if(postIndexValue === '') {
        setError(postIndex, 'Укажите пожалуйста почтовый индекс');
    } else if (!isValidPostIndex(postIndexValue)) {
        setError(postIndex, 'Почтовый индекс должен состоять только из цифр в формате 55555, 55555-5555');
    } else if (postIndexValue.length < 5 ) {
        setError(postIndex, 'Почтовый индекс должен состоять минимум из 5 символов');
    } else {
        setSuccess(postIndex);
    }
};




