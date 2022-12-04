/*
Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
Points newInstance's [[Prototype]] to the constructor function's prototype property,
 if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
 Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive,
 newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
*/
function color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}
// if we donot use 'new' it refer to window object
//new color(255, 40, 100);
//output:-  color {r: 255, g: 40, b: 100}

color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};
color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b},${a})`;
};

const color1 = new color(40, 50, 60);
const color2 = new color(0, 0, 0);
