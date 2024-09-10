function init() {

    let users = [
        { name: "John Doe", birthdate: "15 May 2015", student: false },
        { name: "Jane Smith", birthdate: "10 August 1990", student: true },
        { name: "Michael Johnson", birthdate: "22 November 1985", student: false },
        { name: "Emily Brown", birthdate: "5 April 2001", student: true },
        { name: "William Davis", birthdate: "30 June 1998", student: true },
        { name: "Olivia Martinez", birthdate: "18 September 1982", student: false },
        { name: "William Davis", birthdate: "30 June 1998", student: true },
        { name: "Olivia Martinez", birthdate: "18 September 1982", student: false },
        { name: "William Davis", birthdate: "30 June 1998", student: false },
        { name: "William Davis", birthdate: "30 June 1968", student: false },
        { name: "Olivia Martinez", birthdate: "18 September 1982", student: false },
    ];
    console.log('Filtered result array: ', filterUsers(users));
}

function filterUsers(data) {
    // given data with elements:
    // name: string, birthdate: string, students: boolean
    // filter to categories:
    // retired,students and others
    // if age >= 55: user is retired
    // is student: true: user is a student
    // else: user is in others category

    result = {
        retired: [],
        students: [],
        others: []
    }
    const currYear = 2023;
    data.forEach(element => {
        let [day, month, year] = formatDate(element.birthdate);
        element.birthdate = [day, month, year].join(".");
        if (currYear - parseInt(year) >= 55) {
            element.retired = true;
            result.retired.push(element);
        }
        else if (element.student === true) {
            element.retired = false;
            result.students.push(element);
        }
        else {
            element.retired = false;
            result.others.push(element);
        }
    });
    return result;
}

function convertDateToAge(date) {
    let year = formatDate(date)[0];
}

function formatDate(date) {
    let dateToNum = {
        "january": 1,
        "february": 2,
        "march": 3,
        "april": 4,
        "may": 5,
        "june": 6,
        "july": 7,
        "august": 8,
        "september": 9,
        "october": 10,
        "november": 11,
        "december": 12
    };

    let [day, month, year] = date.split(" ");
    month = dateToNum[month.toLowerCase()];
    if (parseInt(day) > 31) {
        return console.log('Day must be less than 31');
    }
    if (month == 2 && parseInt(day) > 29) {
        return console.log('Max day in February is 29 in a loop year');
    }
    if (parseInt(day) < 10) {
        day = "0" + day;
    }
    if (parseInt(month)) {
        month = "0" + month;
    }
    return [day, month, year];
}

init();