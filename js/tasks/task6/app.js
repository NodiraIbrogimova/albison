function init() {
    console.log(addHypenToStr("hello i'm string"));
    console.log(getRepeatingChars("Hello World"));
    console.log(extendWithEvenPos([1, 2, 3, 4, 5]));
    console.log(uppercaseHeadTail("javascript"));

    // 7, 9, 13, 18 from :
    // https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php#google_vignette
    console.log('Sorted array for given in input: ', [-3, 8, 7, 6, 5, -4, 3, 2, 1], sortArr([-3, 8, 7, 6, 5, -4, 3, 2, 1]));
    console.log('Fill black arr func: ', fillBlankArr());
}


function sortArr(arr) {
    return arr.sort();
}

function swapCharCase(astr) {
    let A = 'A';
    for (let index = 0; index < astr.length; index++) {
        if (64 < astr.charCodeAt(astr[index]) && astr.charCodeAt(astr[index] < 91)) {
            astr = astr.slice(0, index - 1) + astr[index.toLowerCase()] + astr.slice(index + 1, astr.length - 1);
        } else if (96 < astr.charCodeAt(astr[index]) && astr.charCodeAt(astr[index] < 123)) {
            astr = astr.slice(0, index - 1) + astr[index.toUpperCase()] + astr.slice(index + 1, astr.length - 1);
        }
    }
    return astr;
}

function fillBlankArr() {
    let result = []
    let data;
    while (true) {
        data = prompt("Enter data or 'Stop' to end the loop: ")
        if (data == 'Stop') {
            return result;
        }
        if (!data != true) { result.push(data); }
    }
}

function binarySearch(arr, target) {
    let head = 0;
    let tail = arr.length - 1;
    let middle = (head + tail) / 2;
    while (head <= tail) {
        middle = (head + tail) / 2;
        if (arr[middle] == target) {
            return middle;
        }
        if (arr[middle] < target) {
            head = middle + 1;
        }
        else {
            tail = middle;
        }
    }
    return -1;
}

function addHypenToStr(astr) {
    return astr.split(" ").join("-");
}

function getRepeatingChars(astr) {
    seen = [];
    for (let index = 1; index < astr.length; index++) {
        if (astr[index - 1] == astr[index]) {
            seen.push(astr[index]);
        }
    }
    return seen;
}

function extendWithEvenPos(arr) {
    extended = []
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 0) {
            extended.push(arr[index]);
        }
    }
    return arr.concat(extended);
}

function uppercaseHeadTail(astr) {
    if (astr.length < 8) {
        throw "The word length shouldn't be less then 8";
    }

    astr[0] = astr[0].toUpperCase();
    astr[astr.length - 1] = astr[astr.length - 1].toUpperCase();

    return astr[0].toUpperCase() + astr.slice(1, astr.length - 1) + astr[astr.length - 1].toUpperCase();
}

init();