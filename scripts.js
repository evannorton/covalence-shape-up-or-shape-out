class Shape {

    constructor() {
        this.div = $("<div></div");
        $(this.div).click(this.describe.bind(this));
        $(this.div).dblclick(this.delete);
    }

    setCoords() {
        this.x = Math.floor(Math.random() * (601 - this.width));
        this.y = Math.floor(Math.random() * (601 - this.height));
    }

    style() {
        $(this.div).css({
            "position": "absolute",
            "background-color": this.color,
            "width": this.width + "px",
            "height": this.height + "px",
            "left": this.x,
            "top": this.y,
        });
    }

    draw() {
        $(this.div).appendTo(shapeContainer);
    }

    describe() {
        this.text = `Shape Name: ${this.name}<br>Width: ${this.width}
        <br/>Height: ${this.height}
        <br/>Radius: ${this.radius}
        <br/>Area: ${this.area}
        <br/>Perimeter: ${this.perimeter}`;
        $(data).html(this.text);
    }

    delete() {
        this.remove();
    }

}

class Rectangle extends Shape {

    constructor(width, height) {
        super();
        this.name = "Rectangle";
        this.color = "green";
        this.width = width;
        this.height = height;
        this.radius = "N/A";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
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
        this.color = "red";
        this.sideLength = sideLength;
        this.width = sideLength;
        this.height = sideLength;
        this.radius = "N/A";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
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
        this.color = "purple";
        this.width = radius * 2;
        this.height = radius * 2;
        this.radius = radius;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
    }

    getArea() {
        return Math.PI * this.radius * this.radius
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    style() {
        $(this.div).css({
            "position": "absolute",
            "background-color": "purple",
            "width": this.width + "px",
            "height": this.height + "px",
            "left": this.x,
            "top": this.y,
            "-moz-border-radius": this.radius + "px",
            "-webkit-border-radius": this.radius + "px",
        });
    }

}

class Triangle extends Shape {

    constructor(height) {
        super();
        this.name = "Triangle";
        this.color = "yellow";
        this.width = height;
        this.height = height;
        this.radius = "N/A";
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoords();
        this.style();
        this.draw();
    }

    getArea() {
        return 0.5 * this.height * this.height;
    }

    getPerimeter() {
        return 2 * this.height + Math.pow(Math.pow(this.height, 2) + Math.pow(this.height, 2), 0.5)
    }

    style() {
        $(this.div).css({
            "position": "absolute",
            "width": 0 + "px",
            "height": 0 + "px",
            "left": this.x,
            "top": this.y,
            "border-bottom": this.width + "px solid yellow",
            "border-right": this.width + "px solid transparent",
        });
    }

}

let shapeContainer = $("#shape-container");
let data = $("p");

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
    if ((rectangleWidth.val() >= 1 && rectangleWidth.val() <= 600) && (rectangleHeight.val() >= 1 && rectangleHeight.val() <= 600)) {
        let rectangle = new Rectangle(rectangleWidth.val(), rectangleHeight.val());
    }
    else {
        alert("Please enter a width and height between 1 and 600 for the rectangle.");
    }
});

$(squareButton).click(() => {
    if (squareSideLength.val() >= 1 && squareSideLength.val() <= 600) {
        let square = new Square(squareSideLength.val());
    }
    else {
        alert("Please enter a side length between 1 and 600 for the square.");
    }
});

$(circleButton).click(() => {
    if (circleRadius.val() >= 1 && circleRadius.val() <= 300) {
        let circle = new Circle(circleRadius.val());
    }
    else {
        alert("Please enter a radius between 1 an 300 for the circle.");
    }
});

$(triangleButton).click(() => {
    if (triangleHeight.val() >= 1 && triangleHeight.val() <= 600) {
        let triangle = new Triangle(triangleHeight.val());
    }
    else {
        alert("Please enter a height between 1 and 600 for the triangle.");
    }
});