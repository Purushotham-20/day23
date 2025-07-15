// Question 11
console.log("Question 11");
let s = "Sunny";
s = s.toLowerCase();
switch(s)
{
    case "sunny":
        console.log("tshirt");
        break;
    case "rainy":
        console.log("raincoat");
        break;
    case "cold":
        console.log("jacket");
        break;
    default:
        console.log("Invalid");
}
// Question 12
console.log("Question 12");
let day=6;
switch(day)
{
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid");
}
// Question 13
console.log("Question 13");
let pass="Nithin456";
let len = pass.length;
if(len>=8)
    console.log("Valid Password with min 8 chars");
else
    console.log("Invalid pass with less than 8 chars");
// Question 14
console.log("Question 14");
let s1="hi";
let s2="Hi";
s1 = s1.toLowerCase();
s2 = s2.toLowerCase();
if(s1 == s2)
    console.log("Strings are equal");
else
    console.log("Strings are not equal");
// Question 15
console.log("Question 15");
let num = 55;
if(num>=  10 && num<=100)
    console.log("Number within range(10-100)");
else
    console.log("Number not in range(10-100)")
