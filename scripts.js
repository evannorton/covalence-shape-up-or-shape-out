class Shape {

    constructor() {
        this.name;
        this.width;
        this.height;
        this.radius;
        this.area;
        this.perimeter;
        this.x;
        this.y;
    }

    getArea(){}
    getPerimeter(){}
    setCoords() {
        this.x = Math.floor(Math.random() * (601 - this.width));
        this.y = Math.floor(Math.random() * (601 - this.height));
    }

}

class Rectangle extends Shape {

    constructor(width, height) {
        super();
        this.name = "Rectangle";
        this.width = width;
        this.height = height;
        this.radius = "";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * this.width + 2 * this.height;
    }

}

class Square extends Shape {

    constructor(sideLength) {
        super();
        this.name = "Square";
        this.sideLength = sideLength;
        this.width = sideLength;
        this.height = sideLength;
        this.radius = "";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
    }

    getArea() {
        return this.sideLength * this.sideLength;
    }

    getPerimeter() {
        return 4 * this.sideLength;
    }

}

class Circle extends Shape {

    constructor(radius) {
        super();
        this.name = "Circle";
        this.width = radius * 2;
        this.height = radius * 2;
        this.radius = radius;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
    }

    getArea() {
        return Math.PI * this.radius * this.radius
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

}

class Triangle extends Shape {

    constructor(height) {
        super();
        this.name = "Triangle";
        this.width = height;
        this.height = height;
        this.radius = "";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
    }

    getArea() {
        return 0.5 * this.height * this.height;
    }

    getPerimeter() {
        return 2 * this.height + Math.pow(Math.pow(this.height, 2) + Math.pow(this.height, 2), 0.5)
    }

}

let rectangleButton = $("#rectangle-button");
let squareButton = $("#square-button");
let circleButton = $("#circle-button");
let triangleButton = $("#triangle-button");

let rectangleWidth = $("#rectangleWidth");
let rectangleHeight = $("#rectangleHeight");
let squareSideLength = $("#squareSideLength");
let circleRadius = $("#circleRadius");
let triangleHeight = $("#triangleHeight");

$(rectangleButton).click(() => {
    if((rectangleWidth.val() >= 1 && rectangleWidth.val() <= 600) && (rectangleHeight.val() >= 1 && rectangleHeight.val() <= 600)) {
        let rectangle = new Rectangle(rectangleWidth.val(), rectangleHeight.val());
        console.log(rectangle);
    }
    else {
        alert("Please enter a width and height between 1 and 600 for the rectangle.");
    }
});

$(squareButton).click(() => {
    if(squareSideLength.val() >= 1 && squareSideLength.val() <= 600) {
        let square = new Square(squareSideLength.val());
        console.log(square);
    }
    else {
        alert("Please enter a side length between 1 and 600 for the square.");
    }
});

$(circleButton).click(() => {
    if(circleRadius.val() >= 1 && circleRadius.val() <= 300) {
        let circle = new Circle(circleRadius.val());
        console.log(circle);
    }
    else {
        alert("Please enter a radius between 1 an 300 for the circle.");
    }
});

$(triangleButton).click(() => {
    if(triangleHeight.val() >= 1 && triangleHeight.val() <= 600) {
        let triangle = new Triangle(triangleHeight.val());
        console.log(triangle);
    }
    else {
        alert("Please enter a height between 1 and 600 for the triangle.");
    }
});