function init(params) {
    console.log('Arithmetic sum of params: ', arithmetic([1, 2, 3, 4, 5]));
    console.log('Return numeric vals: ', reduceNums(['abs2d', 'qwer41s', 'we3']));
    console.log('Get the first repeated val: ', getFirstRepeated([1, 2, 3, 1, 2, 3]));
    console.log('Resulting array has items with each elem length: ', addWordLength(["apple", "ban"]));
    console.log('Check if two strings are equal: ', stringsAreEqual("12sd", "21ds"));

    // The task given during the lesson:
    console.log('Get the length of >= 3: ', getLengthThree(['afbsagba', 'fa', 'lds', 'sfbs', 'fsdhjhgr']));

}

function arithmetic(params) {
    return params.reduce((total, currentValue) => total + currentValue) / params.length;
}

function reduceNums(params) {
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let result = [];
    params.forEach(element => {
        let curr = [];
        for (let index = 0; index < element.length; index++) {
            if (nums.includes(element[index])) {
                curr.push(element[index]);
            }
        }
        result.push(Number(curr.join('')));
    });
    return result;
}

function getFirstRepeated(params) {
    let seen = [];
    params.forEach(element => {
        if (seen.includes(element)) {
            return element;
        }
        seen.push(element);
    });
    return -1;
}

function getLengthThree(params) {
    let result = params.filter((currentValue) => currentValue.length >= 3);
    return result;
}

function addWordLength(params) {
    let result = params.map((item) => { return `${item} ${item.length}` });
    return result;
}

function stringsAreEqual(str1, str2) {
    if (str1.length != str2.length) { return false };

    let freqStr1 = {};
    [...str1].forEach((achar) => {
        freqStr1[achar] = freqStr1[achar] || 0 + 1;
    });

    let freqStr2 = {};
    [...str2].forEach((achar) => {
        freqStr2[achar] = freqStr2[achar] || 0 + 1;
    });

    for (const key in freqStr1) {
        if (!(freqStr1[key] == freqStr2[key])) {
            return false
        }
    }
    return true;
}

init()