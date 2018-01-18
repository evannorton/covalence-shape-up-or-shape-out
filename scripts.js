class Shape {

    constructor() {
        this.name;
        this.width;
        this.height;
        this.radius;
        this.area;
        this.perimeter;
        this.x = Math.floor(Math.random() * 601);
        this.y = Math.floor(Math.random() * 601);
    }

    getArea(){}
    getPerimeter(){}
    setCoords() {
        this.x -= this.width;
        this.y -= this.height;
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
let squareButton = $("#rectangle-button");
let circleButton = $("#rectangle-button");
let triangleButton = $("#rectangle-button");