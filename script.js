function validateForm() {
    var pibPattern = /^[А-ЩЬЮЯЇІЄҐґ'][а-щьюяїієґ']*\s[А-ЩЬЮЯЇІЄҐґ]\.\s?[А-ЩЬЮЯЇІЄҐґ']\.$/;
    var variantPattern = /^\d{2}$/;
    var phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    var facultyPattern = /^[А-ЩЬЮЯЇІЄҐґ]{2,10}$/;
    var addressPattern = /^м\.\s[А-ЩЬЮЯЇІЄҐґ][а-щьюяїієґ]{1,19}$/;

    var pib = document.getElementById('pib');
    var variant = document.getElementById('variant');
    var phone = document.getElementById('phone');
    var faculty = document.getElementById('faculty');
    var address = document.getElementById('address');

    var isValid = true;

    if (!pibPattern.test(pib.value)) {
        setInvalidStyle(pib);
        isValid = false;
    } else {
        removeInvalidStyle(pib);
    }

    if (!variantPattern.test(variant.value)) {
        setInvalidStyle(variant);
        isValid = false;
    } else {
        removeInvalidStyle(variant);
    }

    if (!phonePattern.test(phone.value)) {
        setInvalidStyle(phone);
        isValid = false;
    } else {
        removeInvalidStyle(phone);
    }

    if (!facultyPattern.test(faculty.value)) {
        setInvalidStyle(faculty);
        isValid = false;
    } else {
        removeInvalidStyle(faculty);
    }

    if (!addressPattern.test(address.value)) {
        setInvalidStyle(address);
        isValid = false;
    } else {
        removeInvalidStyle(address);
    }

    if (isValid) {
        alert("Введені дані:\n\n" +
            "ПІБ: " + pib.value + "\n" +
            "Варіант: " + variant.value + "\n" +
            "Телефон: " + phone.value + "\n" +
            "Факультет: " + faculty.value + "\n" +
            "Адреса: " + address.value);
    }

    return isValid;
}

function formatPhoneNumber() {
    var input = document.getElementById('phone');
    var value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
        value = '(' + value.substring(0, 3) + ')-' + value.substring(3, 6) + '-' + value.substring(6, 8) + '-' + value.substring(8, 10);
    }

    input.value = value;
}

function addCityPrefix() {
    var input = document.getElementById('address');
    var value = input.value.trim();

    if (value.length >= 2 && value.length <= 20) {
        if (!value.startsWith('м.')) {
            input.value = 'м. ' + value;
        }
    }
}

function setInvalidStyle(element) {
    element.style.borderColor = 'red';
}

function removeInvalidStyle(element) {
    element.style.borderColor = '';
}
