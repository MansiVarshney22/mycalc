function add(){
    // console.log("Hi")
    let x=Number(document.getElementById('num1').value)
    let y=Number(document.getElementById('num2').value)
    let result=(x)+(y)
    result=result.toFixed(2)
    // console.log(result)
    document.getElementById("result").innerHTML=`<h3>  `+String(result)+`</h3>`
}
function sub(){
    let x=Number(document.getElementById('num1').value)
    let y=Number(document.getElementById('num2').value)
    result=x-y
    result=result.toFixed(2)
    // console.log(result)
    document.getElementById("result").innerHTML=`<h3>  `+String(result)+`</h3>`
}
function mul(){
    let x=Number(document.getElementById('num1').value)
    let y=Number(document.getElementById('num2').value)
    result=x*y
    result=result.toFixed(2)
    // console.log(result)
    document.getElementById("result").innerHTML=`<h3>  `+String(result)+`</h3>`
}
function divide(){
    let x=Number(document.getElementById('num1').value)
    let y=Number(document.getElementById('num2').value)
    result=x/y
    result=result.toFixed(2)
    // console.log(result)
    document.getElementById("result").innerHTML=`<h3>  `+String(result)+`</h3>`
}