// 1) написать валидацию для пароля - он принимает только латиницу и числа, длина должна быть не менее 6-ти знаков и
// содержать должен и буквы и цифры. функция возвращает "valid" || "invalid"

function isValidationPassword(value) {
    const minLength = 6;
    const validMessage = 'valid';
    const inValidMessage = 'invalid';

    value = value.toString();

    if (value.length < minLength) {

        return inValidMessage;
    }

    if (_isValidationReg(value)) {

        return inValidMessage;
    }

    return validMessage;
}

function _isValidationReg(value) {
    const minPosition = -1;
    const regNumber = /[0-9]/;
    const regString = /[a-zA-Z]/;
    const positionString = value.search(regString);
    const positionNumber = value.search(regNumber);

    return (minPosition === positionString || minPosition === positionNumber);
}

isValidationPassword('dasasdvasd23esdc32');


// 2. функция принимает массив чисел, необходимо проверить его на четные и не четные, числа, вывести первое число
// (четное или не четное), в зависимости от того, каких чисел меньше

function isValidationArray(value) {
    let notEvenSum = 0;

    value.forEach((item) => {
        if (item % 2) {
            notEvenSum++
        }
    });

    if (notEvenSum > value.length / 2) {
        return value.find((item) => item % 2);
    } else {
        return value.find((item) => {
            if (item % 2 === 0) {
                return item;
            }
        });
    }
}

isValidationArray([1, 2, 3, 5, 7, 4, 6, 8, 10, 12, 11, 13, 15]);


//3. написать функцию, которое принимает число и проверяет его на: простое ли оно, четное ли оно и делится ли оно на
// 10 без остатка, необходимо вернуть массив из трех значений с
// ответами на каждое условие отделбно ['true', 'true', 'false']


function isValidationNumber(value) {
    let answers = [];

    answers.push(_isPrime(value));
    answers.push(!(value % 2));
    answers.push(!(value % 10));

    return answers;
}

function _isPrime(number) {
    let i, index = 0;

    if (number < 1) {
        return false;
    }

    for (i = 2; i <= number; i++) {
        if ((number % i) === 0) {
            index++;
        }
    }

    return (index === 1);
}

isValidationNumber(71233);