function init() {
    // // Convert first letter of each word in a given sentence to uppercase
    // const sentence = "hello world of it";
    // console.log('Convert first letter of each word to uppercase:', toTitleCase(sentence));

    // // Chunk array
    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // const size = 5;
    // console.log('Array chunked to a given size: ', chunk(arr, size));

    // // Unique elements
    // const unfiltered = [1, 2, 3, 1, 2];
    // console.log('Array containing each element once only: ', storeEachElemOnce(unfiltered));

    // // Letter combinations for each word for a given sentence
    // const word = "world";
    // console.log('Letter combinations for each word: ', combinations(word));

    // //Fibonacci series for n elements
    // const seriesLength = parseInt(prompt("Enter Fibonacci series length: "));
    // console.log(`Fibonacci series for ${seriesLength} subsequent values: `, fibonacci(seriesLength));
}

function toTitleCase(astr) {
    let [head, tail, result] = [0, 0, []];
    while (tail < astr.length) {
        if (astr[tail] == " ") {
            result.push(astr[head].toUpperCase() + astr.slice(head + 1, tail + 1));
            head = tail + 1;
        }
        tail++;
    }
    if (head < astr.length) {
        result.push(astr[head].toUpperCase() + astr.slice(head + 1, tail));
    }
    return result.join(" ");
}

function chunk(arr, size) {
    if (size >= arr.length) {
        return arr;
    }

    let result = [];
    let head = 0;
    let tail = size;
    while (tail <= arr.length) {
        result.push(arr.slice(head, tail));
        head += size;
        tail += size;
    }
    if (head < arr.length) {
        result.push(arr.slice(head, arr.length));
    }
    return result;
}


function storeEachElemOnce(arr) {
    // Approach 2
    // using arr: but the time complexity increases dramatically
    // seen = []
    // e
    // [1,2,3,3,4,4,5,6,6,6,6,7]
    let seen = [];
    arr.forEach(element => {
        if (!seen.includes(element)) {
            seen.push(element);
        }
    });
    return seen;

    // Approach 1
    // using set:
    // let seen = new Set(arr);
    // return [...seen];
}

function combinations(params) {
    let head = 0;
    let tail = 0;
    let result = [];
    while (head < params.length) {
        while (tail < params.length) {
            tail++;
            result.push(params.slice(head, tail));
        }
        ++head;
        tail = head;
    }
    return result;
}

function fibonacci(n) {
    let prev = 0;
    let curr = 1;
    let fibonacciSeries = [prev, curr];
    while (fibonacciSeries.length < n) {
        let temp = prev;
        prev = curr;
        curr = temp + curr;
        fibonacciSeries.push(curr);
    }
    return fibonacciSeries;
}

init();