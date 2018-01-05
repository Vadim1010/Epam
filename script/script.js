// 1) написать валидацию для пароля - он принимает только латиницу и числа, длина должна быть не менее 6-ти знаков и
// содержать должен и буквы и цифры. функция возвращает "valid" || "invalid"

function validationString(value) {
    const minLength = 6;
    const validMessage = 'valid';
    const inValidMessage = 'invalid';

    if (value.length < minLength) {
        return inValidMessage;
    }

    return (value.search(/[0-9]/) > -1) && (value.search(/[a-zA-Z]/) > -1) ? validMessage : inValidMessage
}


validationString('qweewqewqeqw2');


// 2. функция принимает массив чисел, необходимо проверить его на четные и не четные, числа, вывести первое число
// (четное или не четное), в зависимости от того, каких чисел меньше

function validationArray(arrNumber) {
    const even = arrNumber.filter((e) => !(e % 2));
    const odd = arrNumber.filter((e) => (e % 2));

    return (even.length > odd.length) ? odd[0] : even[0];
}

validationArray([2, 2, 4, 5, 7, 4, 6, 8, 10, 12, 11, 13, 15]);


//3. написать функцию, которое принимает число и проверяет его на: простое ли оно, четное ли оно и делится ли оно на
// 10 без остатка, необходимо вернуть массив из трех значений с
// ответами на каждое условие отделбно ['true', 'true', 'false']


function validationNumber(n) {
    let arr = [];

    arr.push(isPrime);
    arr.push(!(n % 2));
    arr.push(n.toString()[n.length - 1] === 0);

    return arr
}

function isPrime(n) {
    if (n === 1)
        return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


validationNumber(7123312);