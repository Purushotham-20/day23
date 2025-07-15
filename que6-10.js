// Question 6
console.log("Question 6");
let mark = 85;
if(mark>=90)
    console.log("A");
else if(mark>=75 && mark<90)
    console.log("B");
else if(mark>=60 && mark<75)
    console.log("C");
else
    console.log("F");
// Question 7
console.log("Question 7");
let num=15;
if(num%3==0 && num%5==0)
    console.log(num+" is divisible by both 3 and 5");
else if(num%3==0 && num%5!=0)
    console.log(num+" is divisible by 3 only");
else if(num%3!=0 && num%5==0)
    console.log(num+" is divisible by 5 only");
else
    console.log(num+" is not divisible by both 3 and 5");
// Question 8
console.log("Question 8");
let s="Nithin";
if(s)
    console.log("String is not empty");
else
    console.log("String is empty");
// Question 9
console.log("Question 9");
let day=5;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter valid day");
}
// Question 10
console.log("Question 10");
let char = 'o';
char = char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
    console.log("Vowel");
else
    console.log("Not a vowel");
