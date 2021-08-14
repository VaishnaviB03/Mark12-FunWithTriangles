var inputAngle = document.querySelectorAll('.input')
var btn = document.querySelector("#btn")
var output = document.querySelector("#output")

//to calculate sum of angles
function sumOfAngle(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3
    return sum
}

//To check weather its a triangle
function checkIfTriangle(){
    const sum =sumOfAngle(Number(inputAngle[0].value),Number(inputAngle[1].value),Number(inputAngle[2].value))
    // console.log(sum);
    if(sum === 180){
        output.innerText = "Yayyy! it is a Triangle 🤩"
    }
    else{
        output.innerText = "Oops! it's not a Triangle 🙁"
    }
        // console.log("yess")
}



btn.addEventListener("click",checkIfTriangle)