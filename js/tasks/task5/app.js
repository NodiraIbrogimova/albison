// 7, 9, 13, 18
// function init() {
//     let str1 = " hello JoHn how are you?";
//     let str2 = "john";
//     console.log('Check; ', str1.toLowerCase().includes(str2.toLowerCase()));
// }

function init() {
    console.log(isArray('abcs'));
    console.log(isArray([1, 2, 3, 4]));
    console.log(isArray('a'));

    console.log(arrayClone([1, 2]));
    console.log(arrayClone([1, [5, 6, 7]]));

    console.log(getFirstElement([7, 9, 0, -2]));
    console.log(getFirstElement([], 3));

    console.log(getLastElement([7, 9, 0, -2]));
    console.log(getLastElement([], 3));

    console.log(arrayJoin(["Red", "Green", "White", "Black"]));

    console.log(insertDashForEven('025468'));

    console.log('Most freq elem: ', getMostFreqElem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

    printNestedArr([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);

    console.log('Cum of squares of a numberical vector: ', sumSquaresofArr([7, 0, 7, 27]));

    console.log('Sum and product of an array : ', sumAndProductOfArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

    console.log('Removed duplicated from array: ', [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6], removeDuplicates([1, 2, 2, 4, 4, 4, 5, 5, 4, 7, 8, 7, 3, 6]));

    displayColors(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]);

    console.log('Leap years in given range: ', isLeapYear(2019, 2023));

    console.log('Shuffle array: ', shuffleArray([1, 2, 3, 4, 5, 7, 8, 9]));

    console.log('Duplicate elements of ', [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6], getDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

    console.log('Union arrays: ', union([1, 2, 3], [100, 2, 1, 10]));

    console.log('Flatten the array ', flatten([1, [2], [3, [[4]]], [5, 6]]));

    console.log('Difference of arrays: ', difference([1, 2, 3], [100, 2, 1, 10]));

    console.log('Remove Nones: ', removeNone([NaN, 0, 15, false, -22, '', undefined, 47, null]));
}

function isArray(...args) {
    return Array.isArray(...args);
}

function arrayClone(arr) {
    let result = [];
    arr.forEach(element => {
        result.push(element);
    });
    return result;
}

function getFirstElement(...args) {
    let elems = [...args];
    return elems[0];
}

function getLastElement(...args) {
    let elems = [...args];
    return elems[elems.length - 1];
}

function arrayJoin(...args) {
    return [...args].join(',');
}

function insertDashForEven(anum) {
    let digits = [...anum];
    let result = []
    for (let index = 0; index < digits.length - 1; index++) {
        result.push(digits[index]);
        if (digits[index] % 2 == 0) {
            result.push('-');
        }
    }
    result.push(digits[digits.length - 1]);

    return result;
}

function getMostFreqElem(elems) {
    //when elems are mixed
    let obj = {};
    elems.forEach(element => {
        if (!obj[element]) {
            obj[element] = 0;
        }
        ++obj[element];
    });
    let maxFreq = 0;
    for (const key in obj) {
        if (obj[key] > maxFreq) {
            maxFreq = obj[key];
        }
    }
    return maxFreq;

    // when elems are numbers only
    /***
    let maxVal = Math.max(elems);
    let freqs = new Array(maxVal + 1).fill(0);
    for (let index = 0; index < elems.length; index++) {
        ++freqs[elems[index]];
    }
    let maxFreq = Math.max(freqs);
    for (let index = 0; index < freqs.length; index++) {
        if (freqs[index] == maxFreq) {
            return index;
        }
    }
    ***/
}


function printNestedArr(arr) {
    for (let row = 0; row < arr.length; row++) {
        console.log(`row ${row}:`);
        for (let column = 0; column < arr[row].length; column++) {
            console.log(arr[row][column]);
        }
    }
}


function sumSquaresofArr(arr) {
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        total += Math.pow(arr[index], 2);
    }
    return total;
}

function sumAndProductOfArr(arr) {
    let asum = 0;
    let product = 1;
    for (let index = 0; index < arr.length; index++) {
        asum += arr[index];
        product *= arr[index];
    }
    return [asum, product];
}


function removeDuplicates(arr) {
    let seen = new Set();
    for (let index = 0; index < arr.length; index++) {
        if (seen.has(arr[index])) {
            let removeIndex = arr.indexOf(arr[index]);
            if (removeIndex > -1) { // only splice array when item is found
                arr.splice(removeIndex, 1); // 2nd parameter means remove one item only
            }
            continue;
        }
        seen.add(arr[index]);
    }
    return arr;
}

function displayColors(colors) {
    o = ["th", "st", "nd", "rd"];
    for (let index = 0; index < colors.length; index++) {
        if (index == 0) {
            console.log(`${index + 1}${o[1]} choice is ${colors[index]}`);
        }
        else if (index == 1) {
            console.log(`${index + 1}${o[2]} choice is ${colors[index]}`);
        }
        else if (index == 2) {
            console.log(`${index + 1}${o[3]} choice is ${colors[index]}`);
        }
        else {
            console.log(`${index + 1}${o[0]} choice is ${colors[index]}`);
        }
    }
}

function isLeapYear(start, end) {
    let leapYears = []
    while (start <= end) {
        if ((start % 4 == 0 && start % 100 != 0) || (start % 100 == 0 && start % 400 == 0)) {
            leapYears.push(start);
        }
        start++;
    }
    return leapYears;
}

function shuffleArray(elems) {
    for (let head = elems.length - 1; head > 0; head--) {
        let tail = Math.floor(Math.random() * (head + 1));
        // reverse the orders of elems
        let curr = elems[head];
        elems[head] = elems[tail];
        elems[tail] = curr;
    }
    return elems;
}

function sumArrayIndexValues(arr1, arr2) {
    itr1, itr2 = 0, 0;
    result = []
    while (itr1 < arr1.length && itr2 < arr2.length) {
        result.push(arr1[itr1] + arr2[itr2]);
        itr1++;
        itr2++;
    }
    while (itr1 < arr1.length) {
        result.push(arr1[itr1]);
        itr1++;
    }
    while (itr2 < arr2.length) {
        result.push(arr2[itr2]);
        itr2++;
    }
    return result;
}

function getDuplicates(elems) {
    let seen = new Set();
    let result = [];
    elems.forEach(element => {
        if (seen.has(element)) {
            result.push(element);
        }
        seen.add(element);
    });
    return result;
}

function flatten(arr) {
    // Using JS method
    return arr.flat();

    // Custom:
    let result = []
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
            for (let j = 0; j < arr[index].length; j++) {
                result.push(arr[index][j]);
            }
        }
        else {
            result.arr[index];
        }
    }
    return result;
}

function union(arr1, arr2) {
    return arr1.map((element, index) => {
        return [element, arr2[index]];
    });
}

function difference(arr1, arr2) {
    let result = []
    let seen = new Set();
    for (let index = 0; index < arr1.length; index++) {
        seen.add(arr1[index]);
    }
    for (let j = 0; j < arr2.length; j++) {
        if (seen.has(arr2[j])) {
            continue;
        }
        result.push(arr2[j])
    }
    return result;
}

function removeNone(elems) {
    for (let index = 0; index < elems.length; index++) {
        if (element == NaN || element == undefined || element == null || element == false || element == "" || element == 0) {
            let removeIndex = elems.indexOf(elems[index]);
            if (removeIndex > -1) { // only splice array when item is found
                elems.splice(removeIndex, 1); // 2nd parameter means remove one item only
            }
        }
    }
    return elems;
}


init();