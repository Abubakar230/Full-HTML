//    Average of Two Numbers

function Average1()
{
    let a=+prompt("enter first number=");
    let b=+prompt("enter second number=");
    let c=+prompt("enter third number=");
    d=(a+b+c)/3;
    alert("the average of "+a+" , "+b+" and "+c+" is ="+d);
    document.write("the average of "+a+" , "+b+" and "+c+" is ="+d);
    console.log("the average of "+a+" , "+b+" and "+c+" is ="+d);

}


//   percentage of marks

function percentage1()
{
let a=+prompt("enter total marks");
let b=+prompt("enter obtain marks");
c=(b/a)*100;
alert("Your marks is "+c+".");
document.write("Your marks is "+c+"%");
console.log("Your marks is "+c+"%");
}


//    Addition of two numbers

function addition1()
{
    let a=+prompt("Enter first number=");
    let b=+prompt("Enter second number=");
    c=a+b;
    alert("Sum of "+a+" and "+b+" is ="+c);
    document.write("Sum of "+a+" and "+b+" is ="+c);
    console.log("Sum of "+a+" and "+b+" is ="+c);
}


//     Subtraction of two numbers

function subtraction1()
{
    let a=+prompt("enter first number=");
    let b=+prompt("enter second number=");
    c=a-b;
    alert("the subtract of "+a+" and "+b+" = "+c);
    document.write("the subtract of "+a+" and "+b+" = "+c);
    console.log("the subtract of "+a+" and "+b+" = "+c);
}


//      Multiplication of two numbers

function Multiplication1()
{
    let a=+prompt("enter first number=");
    let b=+prompt("enter second number=");
    c=a*b;
    alert("the multiplication of "+a+" and "+b+" is = "+c)
    document.write("the multiplication of "+a+" and "+b+" is = "+c)
    console.log("the multiplication of "+a+" and "+b+" is = "+c)
}


//      Division of two numbers

function division()
{
    let a=+prompt("enter first number");
    let b=+prompt("enter second number");
    c=a/b;
    alert("the division of "+a+" and "+b+" is = "+c);
    document.write("the division of "+a+" and "+b+" is = "+c);
    console.log("the division of "+a+" and "+b+" is = "+c);
}


//       Zakat calculator

function zakat1()
{
    let a=prompt("enter total amount");
    b=a/100*2.5 ;
    alert("the zakat of Rs "+a+" is "+b);
    document.write("the zakat of Rs "+a+" is "+b);
    console.log("the zakat of Rs "+a+" is "+b);
}


//      Oshr Calculator

function oshr1()
{
    let a=+prompt("enter your amount");
    b=a/100*10;
    alert("the oshr of Rs."+a+" is = "+b);
    document.write("the oshr of Rs."+a+" is = "+b);
    console.log("the oshr of Rs."+a+" is = "+b);
}


//   swaping

function swaping()
{
    let a=+prompt("enter first number before sawaping=");
    let b=+prompt("enter second number before swaping");
    alert("before swaping the value is"+a+" and "+b);
    document.write("before swaping the value is"+a+" and "+b);
    temp=a;
    a=b;
    b=temp;
    alert("after swaping the value is "+a+" and "+b);
    document.write("after swaping the value is "+a+" and "+b);
    console.log("after swaping the value is "+a+" and "+b);
}


//     modulus

function modulus1()
{
    let a=+prompt("enter first number=");
    let b=+prompt("enter second number=");
    c=a%b;
    alert("the modulus is"+c);
    document.write("the modulus is"+c);
    prompt.log("the modulus is"+c);
}


//       BMI calculator


function mass12()
{
    let weight_in_kg=+prompt("enter weight in kilogram");
    let height_in_m=+prompt("Enter height in meter");
    bmi=weight_in_kg/height_in_m**2;
    alert("Your weight is "+weight_in_kg+" kg and Your height is = "+height_in_m+" and your MBI is = "+bmi);
    document.write("Your weight is "+weight_in_kg+" kg and Your height is = "+height_in_m+" and your MBI is = "+bmi);
    console.log("Your weight is "+weight_in_kg+" kg and Your height is = "+height_in_m+" and your MBI is = "+bmi)
}


//     percent of amount

function percent()
{
    let a=+prompt("enter number you find percentage");
    let b=+prompt("how many percentage you find");
    c=a/100*b;
    alert(b+" percent of "+a+" is = "+c);
    document.write(b+" percent of "+a+" is = "+c);
}


//     percent of amount with dom

function percentpoint()
{
    let name=prompt("enter your name")
    let a=document.querySelector("#n1").value;
    let b=document.querySelector("#p1").value;
    c=a/100*b;
    document.querySelector("#res1").innerHTML=(`Dear ${name} we check you ${b} percent of ${a} is = ${c}`);
}






