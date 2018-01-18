class Shape {

    constructor() {
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
    }

    getArea() {}
    getPerimeter() {}

}

class Rectangle extends Shape {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

}

class Square extends Shape {

    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

}

class Circle extends Shape {

    constructor(radius) {
        super();
        this.radius = radius;
    }

}

class Triangle extends Shape {

    constructor(height) {
        super();
        this.height = height;
    }

}