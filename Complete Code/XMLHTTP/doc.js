// NOT AT ALL  IMPORTANT TO REMEMBER ANY OF THIS CODE
const req = new XMLHttpRequest();
req.onload = function () {
    console.log("IT LOADED");
    // console.log(this);
    //this is used like in place of req
    const data = JSON.parse(this.responseText);
    //convert that string into object
    // console.log(data);
    console.log(data.name, data.height);

}
req.onerror = function () {
    console.log("Error !!!");
    console.log(this);
}
req.open("GET", 'https://swapi.dev/api/people/1/')
req.send();