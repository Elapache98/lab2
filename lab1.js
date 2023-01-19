"use strict"
//I named by button Id convert button, the addeventlistener enables an action to be performed when clicked upon//
document.getElementById("ConvertButton").addEventListener("click", function () {
    //the input field id from my hmtl is called TempInput the following functions below will be how the input's output will be converted once the converton button has been clicked on//
    let fahrenheit = document.getElementById("TempInput").value;
    //based on the value of a user's input which will always be in fahrenheit we are able to use the value of the fahreinheit input to convert it to either celsius or kelvin//
    let celsius = (fahrenheit - 32) * (5 / 9);
    let kelvin = celsius + 273.15;
    //the output for the conversions will be shown below in the console log//
    console.log("Temperature (fahrenheit): " + fahrenheit);
    console.log("Temperature (celsius): " + celsius);
    console.log("Temperature (kelvin): " + kelvin)
});