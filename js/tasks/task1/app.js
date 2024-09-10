function init() {
    specieName = prompt("Enter name of the specie: ");
    specieMonths = prompt("Enter months of specie: ");
    getSpecieAge(specieName, specieMonths);
}

function getAge(name, ratio, months) {
    quotient = months % ratio;
    totalMonths = quotient + " months";
    years = parseInt(months / ratio);
    if (years < 1) {
        console.log(name + " is " + totalMonths + " old");
        return;
    }
    if (quotient >= 1) {
        totalMonths = " and " + totalMonths;
    }
    console.log(name + " is " + years + " years " + totalMonths + " old");
}

function getSpecieAge(name, months) {
    months = parseInt(specieMonths);
    switch (name) {
        case "fish":
            getAge("Fish", 3, months);
            break;
        case "rabbit":
            getAge("Rabbit", 6, months);
            break;
        case "human":
            getAge("Human", 12, months);
            break;
        case "simpson":
            getAge("Simpson", 18, months);
            break;
        default:
            break;
    }
}

function oddEven(num) {
    return num % 2 == 0;
}

function maxNum(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}

init();