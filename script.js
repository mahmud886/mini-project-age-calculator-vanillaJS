const btnElement = document.querySelector('#btn');
const inputElement = document.querySelector('#birthday');
const resultElement = document.querySelector('#result');

function calculateAge() {
    const birthdayValue = inputElement.value;
    if (birthdayValue === '') {
        alert('Please enter your birthday!');
    } else {
        const age = getAge(birthdayValue);
        resultElement.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'} Old!`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const month = currentDate.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

btnElement.addEventListener('click', calculateAge);
