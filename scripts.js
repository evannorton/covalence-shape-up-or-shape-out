class Shape {

    constructor() {
        
    }

}

class Rectangle extends Shape {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
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
        this.sideLength = sideLength;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
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
        this.radius = radius;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
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
        this.height = height;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
    }

    getArea() {
        return 0.5 * this.height * this.height;
    }

    getPerimeter() {
        return 2 * this.height + Math.pow(Math.pow(this.height, 2) + Math.pow(this.height, 2), 0.5)
    }

}
let myRectangle = new Rectangle(5, 6);
let mySquare = new Square(3);
let myCircle = new Circle(7);
let myTriangle = new Triangle(1);
console.log(myRectangle);
console.log(mySquare);
console.log(myCircle);
console.log(myTriangle);