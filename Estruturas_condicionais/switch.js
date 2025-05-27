let mode= "";

switch (mode){
    case "dark":
        document.querySelector("body").style.backgroundColor = "#222222"
        break;
    case "red": 
        document.querySelector("body").style.backgroundColor = "#FF0000"
        break;
    case "blue":
        document.querySelector("body").style.backgroundColor = "#0000FF"
        break;
    default:
        document.querySelector("body").style.backgroundColor = "#FF00FF";
}