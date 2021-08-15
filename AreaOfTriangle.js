var sides = document.querySelectorAll(".sides") 
var btn = document.querySelector("#btn");
var output = document.querySelector("#output")

function calcSides(base,height){
    var area = (base * height)/2;
    return area
}


function Area(){
    const inputSides = calcSides(Number(sides[0].value),Number(sides[1].value))
    output.innerText = "Area of triangle is : " + inputSides +"cm square." 
}

btn.addEventListener("click",Area)