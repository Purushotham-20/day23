// Question 1
console.log("Question 1");
let n = 4;
if(n>0)
{
    console.log("positive");
}
else
{
    console.log("negative");
}
// Question 2
console.log("Question 2");
let m = 3;
if(m%2==0)
{
    console.log("even");
}
else
{
    console.log("odd");
}
// Question 3
console.log("Question 3");
let age=50;
if(age<18)
{
    console.log("minor");
}
else if(age>=18 && age<50)
    console.log("adult");
else
console.log("senior citizen");
// Question 4
console.log("Question 4");
let year=2024;
if(year%4 == 0 && year%100 != 0 || year%400 == 0)
    console.log("leap year");
else
    console.log("not a leap year");
// Question 5
console.log("Question 5");
let n1=5;
let n2=10;
let g=(n1>n2)?n1:n2;
console.log(g);
