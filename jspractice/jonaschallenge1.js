/*
Mark and John are trying to compare their BMI, which is calculated by mass / height ** 2 
or
mass / (height * height)

Store moark and john's mass and height
calculate their bmi, implement both versions

create boolean markHigherBMI when mark has a higher bmi than john

Mark is 78 kg and is 1.69 m
John weighs 93 kg and is 1.95 m 

version 2 
mark is 78 kg and is 1.88m
john is 85kg and is 1.76m 
*/


const markWeightOne = 78;
const markHeightOne = 1.69;
const markWeightTwo = 95;
const markHeightTwo = 1.88;

const johnWeightOne = 92;
const johnHeightOne = 1.95;
const johnWeightTwo = 85;
const johnHeightTwo = 1.76;

let markBMIOne = markWeightOne / markHeightOne ** 2;
let johnBMIOne = johnWeightOne / johnHeightOne ** 2;

let markBMITwo = markWeightTwo / markHeightTwo ** 2;
let johnBMITwo = johnWeightTwo / johnHeightTwo ** 2;

let markHigherBMI = markBMIOne > johnBMIOne;

console.log(markHigherBMI);