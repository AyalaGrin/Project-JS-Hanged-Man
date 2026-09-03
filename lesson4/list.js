 
 function addItem() {

let input=document.getElementById("InputText").value;

if(input=="")
alert("נא להכניס שם קורס");
else{
let newitem=document.createElement("li");
newitem.innerText=input;
let add=document.getElementById("itemList");
add.appendChild(newitem);

}
document.querySelector("input").value="";


 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

//         var ul = document.getElementById("itemList");
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(text));
//         ul.appendChild(li);
        
//         input.value = ""; // ניקוי תיבת הקלט
//     }