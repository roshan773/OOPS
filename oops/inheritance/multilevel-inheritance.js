class shape {
    constructor(color) {
        this.color = color;
    }
    getcolor() {
        return this.color;
    }

}


class circle extends shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getradius() {
        return this.radius
    }
}


class coloredcircle extends circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let obj = new coloredcircle('blue', 5);
console.log(obj);