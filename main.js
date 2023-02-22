let column_1 = [1, 2, 5, 4, 6, 4,7 ,3 ,3 ,6 ,3,3,4, 6, 6,6,4,2,4,5,4,3,6,6,5,4,4,6,4,5];
let column_2 = [1, 2, 5, 4, 6, 4,7 ,3 ,3 ,6 ,4,3,4, 6, 6,6,4,2,4,5,4,3,6,6,5,4,4,6,4,5];
let column_3 = [45,75,45,76,56,67,98,67,65,45,77,66,55,55,77,65,77,88,44,57,88,66,88,99,54,68,77,66,55,55];
let column_4 = [45,75,45,76,56,67,98,67,65,45,77,66,55,55,77,65,77,88,44,57,88,66,88,99,54,68,77,66,55,55];

var sum1 = 0;
for(let i =0; i<column_1.length; i++) {
    sum1 += column_1[i];
}
var sum2 = 0;
for(let i =0; i<column_2.length; i++) {
    sum2 += column_2[i];
}
var sum3 = 0;
for(let i =0; i<column_3.length; i++) {
    sum3 += column_3[i];
}
var sum4 = 0;
for(let i =0; i<column_4.length; i++) {
    sum4 += column_4[i];
}
let sums = [sum1, sum2, sum3, sum4];

let totalScore = 0;
for(let i =0; i<sums.length; i++) {
    totalScore += sums[i];
}

let results = {
    col1: column_1,
    col2:column_2,
    col3:column_3,
    col4:column_4,
    sums,
    total_score: totalScore,
}
//show console
console.log(results)
