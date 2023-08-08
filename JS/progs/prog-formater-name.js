nameGiven = prompt("Enter your name:");
letterSlice = nameGiven.slice(0,1);
letterSlice = letterSlice.toUpperCase();

nameLen = nameGiven.length;
restName = nameGiven.slice(1,nameLen);
restName = restName.toLowerCase();

alert("Welcome " + letterSlice + restName);



