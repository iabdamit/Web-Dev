String.prototype.yell = function () {//adding new property in string prototype
    return `OMG !! ${this.toUpperCase()}!! Hi`
};
Array.prototype.pop = function () {
    return `SORRY I WANT THAT ELEMENT, I WILL NOT POP IT OFF!`;//CHANGING POP PROPERTY
}