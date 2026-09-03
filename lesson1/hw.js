
let x=0


x+=1

function count()
{
let n1= Math.round(Math.random()*255)
let n2= Math.round(Math.random()*255)
let n3= Math.round(Math.random()*255)
let color="rgb("+n1+","+n2+","+n3+")"

x+=1
 document.getElementById("mone").innerText = x
 document.getElementById("mone").style.backgroundColor = color
// document.body.button.mone.color=color

// document.body.mone=color
}
