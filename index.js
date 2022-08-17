var rect = require('./rectangle');

function solveRect(l, b) { 
    console.log("Solving for Rectangle for l: " + l + " and b: " + b);

    if(l <= 0 || b<=0) {
        console.log("Dimensions should be greater than zero.");
    } else {
        console.log("Area of rectangle is " + rect.area(l, b));
        console.log("Perimeter of rectangle is " + rect.perimeter(l, b));
    }
}

solveRect(4,6);

solveRect(0,6);

solveRect(2,6);