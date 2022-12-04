class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    /*
     greet() {
         return `HELLO FROM ${this.name}`
     }
     */
    innerRGB() {
        const { r, g, b } = this;  // destructuring
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()},${a})`;
    };
    // 'this' anytime in the class is refer to the instance of the class
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');