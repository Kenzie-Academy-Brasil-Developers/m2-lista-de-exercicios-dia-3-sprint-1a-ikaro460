let grades = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8]
console.log(grades);

function aboveAverageGrades(a) {
    return a.filter(b => b > 8);
}
console.log(aboveAverageGrades(grades));

function averageGrades(a) {
    return a.filter(b => b === 8);
}
console.log(averageGrades(grades));

function belowAverageGrades(a) {
    return a.filter(b => b < 8);
}
console.log(belowAverageGrades(grades));

function sumOfAllGrades(a) {
    return a.reduce((b,c) => b + c);
}
console.log(sumOfAllGrades(grades));

function averageOfGrades(a) {
    return Math.round(a.reduce((b,c) => b + c)/a.length * 10)/10;
}
console.log(averageOfGrades(grades));

function maxGrade(a) {
    return Math.max.apply(0, a);
}
console.log(maxGrade(grades));

function minGrade(a) {
    return Math.min.apply(0, a);
}
console.log(minGrade(grades));
