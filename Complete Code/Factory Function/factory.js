/*
// convert input into hexColor format
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
//covert input into rgb color format
function rgbColor(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}
hex(255, 100, 25);
rgb(255, 100, 25);
*/

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgbColor = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}
const firstColor = makeColor(35, 255, 150);
firstColor.hex();
firstColor.rgbColor();

// the value of 'this' reffer to the left of 'this' .