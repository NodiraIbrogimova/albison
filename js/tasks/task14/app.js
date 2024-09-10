function main() {
    console.log('Given char is repeated n times: ', countGivenChar(["lorem ipsum", "m"], "m"));
    console.log('Given array has n words: ', countWords("lorem ipsum dolor sit amet"));
    console.log('Given string is palindrome: ', isPalindrome("yays"));
    console.log('Check is person has to retire: ', isRetired("Mary", "F", 52));
    console.log('Get the list of missing days', missingWeekDays(['dushanba', 'chorshanba', 'payshanba', 'yakshanba']));
}

function countGivenChar(params, achar) {
    let count = 0;
    params.forEach(element => {
        for (let index = 0; index < element.length; index++) {
            if (element[index] == achar) {
                count++;
            }
        }
    });
    return count;
}

function countWords(words) {
    return words.trim().split(' ').length;
}

function isPalindrome(params) {
    let head = 0;
    let tail = params.length - 1;
    while (head <= tail) {
        if (params[head] != params[tail]) {
            return false
        }
        head++;
        head--;
    }
    return true;
}

function isRetired(name, gender, age) {
    if (gender == 'F') {
        if (age >= 53) {
            return `${name} is eligible to retire`;
        }
        return `${name} is not eligible to retire at the age of ${age}`;
    }
    else {
        if (age >= 55) {
            return `${name} is eligible to retire`;
        }
        return `${name} is not eligible to retire at the age of ${age}`;
    }
}

function missingWeekDays(days) {
    let weekDays = ['dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba', 'yakshanba'];
    let result = [];
    weekDays.forEach(day => {
        if (!days.includes(day)) {
            result.push(day);
        }
    });
    return result;
}

main();