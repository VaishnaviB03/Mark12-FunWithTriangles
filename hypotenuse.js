var inputSides = document.querySelectorAll('.side')
var btn = document.querySelector('#btn');
var output = document.querySelector("#output")

function calculateSides(a,b){
    const side = (a*a) + (b*b);
    return side
}

function Hypotenuse(){
    const side = calculateSides(Number(inputSides[0].value),Number(inputSides[1].value))
    // console.log(calculateSides(Number(inputSides[0].value)));
    const length = Math.sqrt(side)
    output.innerText = "Length of Hypotenuse is " + length
}

btn.addEventListener('click', Hypotenuse)