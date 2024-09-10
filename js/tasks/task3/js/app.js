function init() {
    let val = 4;
    answer = factorial(val);
    fizzBuzz();
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    primes(nums);
    isPalindrom();

    printGreeting();
}

function printGreeting() {
    let time = parseInt(prompt("Enter hour: "));
    if (time >= 6 && time <= 12) {
        console.log('Good morning');
    }
    else if (time >= 12 && time <= 18) {
        console.log('Good afternoon');
    }
    else {
        console.log('Good night');
    }
}


function factorial(num) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else if (n > 1) {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
    else {
        return "number has to be positive."
    }
}

function fizzBuzz(num) {
    if (num % 3 == 0) {
        if (nums % 5 == 0) {
            console.log('fizzbuzz');
        }
        else {
            console.log('fizz');
        }
    }
    else if (num % 5 == 0) {
        console.log('buzz');
    }
}

function primes(nums) {
    nums.forEach(element => {
        if (element == 0 || element == 1) {
            return false;
        }
        for (let index = element - 1; index > 1; index--) {
            if (element % index == 0) {
                return false;
            }
        }
        return true;
    });
}

function isPalindrom(astr) {
    let start = 0;
    let end = len(astr) - 1;

    while (start <= end) {
        if (astr[start] != ast[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

init();