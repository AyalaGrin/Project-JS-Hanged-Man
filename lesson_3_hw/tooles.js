function task_input(num1){
let button=document.getElementById("b"+num1);
openTextinput(button)
openenterbutton(button)
}
function openTextinput(button){
let text = button.querySelector('input')
text.hidden=false;

}
function openenterbutton(button){
let enter = button.querySelector('.enter')
enter.hidden=false;
let chang = button.querySelector('.chang')
chang.hidden=true;
}
function task_display_text(num2){
    
let button=document.getElementById("b"+num2);

let text = button.querySelector('input')
let name=text.value;

if(text.value== 0)
    alert("נא להקליד שם מבצע");
else{
text.hidden=true;
let enter = button.querySelector('.enter')
enter.disabled = true;
let span=button.querySelector('span')
span.hidden=false;
}
}
function changcolor(){
document.getElementById('colorPicker').click();
}
function color(selectedColor) {
    let allCards = document.querySelectorAll('.task-card');
    allCards.forEach(function(card) {
        card.style.backgroundColor = selectedColor; });

}


