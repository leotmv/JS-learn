function whosPaying(n0, n1, n2, n3, n4) {
    var pay = [];
    pay.push(n0);
    pay.push(n1);
    pay.push(n2);
    pay.push(n3);
    pay.push(n4);
    var x = Math.floor(Math.random() * (pay.length - 1) + 1);
    //multiply Math.random() * (max - min) + min will return a number between a range
    return pay[x] + " is going to buy lunch today!"
}
var people = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(people[0], people[1], people[2], people[3], people[4]));