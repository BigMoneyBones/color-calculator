const prompt = require('prompt-sync')();

let option = Number(prompt("Enter [1] for color construction. Enter [2] for color deconstruction: "));

    if (option === 1){
        console.log("Available colors are: Red, Blue, and Yellow")

        let color1 = (prompt("Enter the first color: "));
        let color2 = (prompt("Enter the second color: "));
        
        if (color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red") {
            console.log("purple");
        } else if (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red") {
            console.log("Orange");
        } else if (color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue") {
            console.log("Green");
        } else {
            console.log("ERROR");
        }
    } else if (option === 2) {
        let color3 = (prompt("Enter color to be deconstructed: "));
        if (color3 === "purple") {
            console.log("red & blue");
        } else if (color3 === "Orange") {
            console.log("red & yellow");
        } else if (color3 === "green") {
            console.log("blue & yellow")
        } else {
            console.log("ERROR");
        }
    }













