function clickMe(event)
{
    //event - משתנה הקיים בכל פונקציה המופעלת עי ארוע
    //משתנה זה מכיל מידע על הארוע
    // currentTarget - מחזיר את התגית עליה רשום הארוע
    // target - התגית עליה התרחש הארוע
    console.log(event.currentTarget);
    console.log(event.target);
    event.currentTarget.style.backgroundColor='pink' 
}
function print()
{
   console.log(event);

}

function checkHe()
{
    // event.key - התו שנכתב
    let tav=event.key
    if( !(tav>='א' && tav<='ת' ||tav==' '))
    {
        // parentElement - תגית האבא
         let err= event.currentTarget.parentElement.querySelector('p')
        err.innerText="עברית בלבד "
        err.hidden=false
    }  
}
function req()
{ 
    let err= event.currentTarget.parentElement.querySelector('p')
    if(event.currentTarget.value=='')
    {
        err.innerText="שדה חובה"
        err.hidden=false
        // focus - הצבת הסמן בתגית
        event.currentTarget.focus()
    }
    else
         err.hidden=true
}

function checkAdd()
{
    let tav=event.key
    // if( !(tav>='א' && tav<='ת' ||tav>='A' && tav<='z'||tav>='A' && tav<='z'||tav==' '))
    let err= event.currentTarget.parentElement.querySelector('p')
    if(!(/^[a-zA-Z 0-9א-ת]/.test(tav)))
    {
        err.hidden=false
        event.preventDefault()
    }
    else
        err.hidden=true

}
function save()
{
    event.preventDefault()
    sessionStorage.setItem('a','a')
    window.location='../Lesson_6_window_json/page2.html'
}