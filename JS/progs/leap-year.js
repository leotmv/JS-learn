function y4f(y4){
    if (y4 == 0){
        return x = "1";
    }
    else{
        return x = "0";
    }
}
function y400f(y400){
    if (y400 == 0){
        return x = "1";
    }
    else{
        return x = "0";
    }
}
function y100f(y100){
    if (y100 == 0){
        return x = "1";
    }
    else{
        return x = "0";
    }
}
year_gv = prompt("Enter a year value: ");
y4 = year_gv % 4;
y100 = year_gv % 100;
y400 = year_gv % 400;

if (y4f(y4)+y100f(y100) == "10"){
    console.log("It's a leap year");
}
else if (y4f(y4)+y100f(y100) == "11"){
    if(y400f(y400)+y100f(y100) == "01"){
        console.log("It's not a leap year");
    }
}
else if (y400f(y400)+y100f(y100) == "10"){
    console.log("It's not a leap year");
}
else if  (y400f(y400)+y100f(y100) == "00"){
    console.log("It's not a leap year");
}
else if (y400f(y400)+y100f(y100) == "01"){
    console.log("It's not a leap year");
}
else{
    console.log("It's not a leap year");
}