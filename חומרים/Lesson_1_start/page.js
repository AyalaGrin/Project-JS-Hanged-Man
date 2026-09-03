// alert("שלום")
//DOM - Document Object Model - מסמך עם מודל אובייקטים
//מסמך הממיר את כל התצוגה מתגיות לאובייקטים
//תוך שמירה על מאפיינים והיררכיה נכונה


//נשנה את צבע הרקע
// document - המסמך
// body - התגית היחידה שניתן לגשת אליה ישירות
//היא תמיד תהיה , ותמיד אחד
// style - החלק העיצובי
// backgroundColor - המאפיין אותו נרצה לשנות
// ונציב את הערך הרצוי
// document.body.style.backgroundColor="pink"

//נגריל בכל טעינה צבע שונה מתוך מערך
let arrColors=["orange","rgb(242, 147, 147)","rgb(98, 229, 252)","aquamarine"]
//נשתמש בפונקציה מובנית להגרלה
let num=Math.random()//מגריל מספר בין 0 ל 1
num=num*arrColors.length//מספר בטווח המערך
num=Math.floor(num)//נעגל את המספר
document.body.style.backgroundColor=arrColors[num]

//בלחיצת כפתור נשנה את בצע האותיות
//לצבע מוגרל
//מבנה פונקציה 
function changeColor()
{
    //נקודת עצירה
    debugger
//הדפסה לקונסול
console.log("נכנסנו לפונקציה");
//נגריל מספרים לצבעי אדום ירוק כחול
let n1= Math.round(Math.random()*255)
let n2= Math.round(Math.random()*255)
let n3= Math.round(Math.random()*255)
console.log(n1);
console.log(n2);
console.log(n3);

//נבנה את מחרוזת הצבע
let color="rgb("+n1+","+n2+","+n3+")"
document.body.style.color=color
}



// הגדרת משתנים
//אין צורך להגדיר טיפוס נתונים
var x=10
let y=15
x+=10
var x="sara"
// let y=12


//פונקציה המשנה את גודל הכתב של הכפתור
function ctext()
{
//כל תגית יש לחפש עי פונקציה
//ישנם כמה פונקציות חיפוש
//1. getElementById - מקבל ID
//ומחזירה את התגיצ / האובייקט שיש לו זהות זו
//null אם אין מחזיר

    //חיפוש הכפתור במסך
   let btn= document.getElementById("b")
   if(btn==null)
     return 
        //שינוי גודל הכתב שלו
    //אם הכתב גדול נחליף לקטן
    if(btn.style.fontSize=='xx-small')
        btn.style.fontSize='xx-large'
    else
                btn.style.fontSize='xx-small'

    //ולהפך
}


let a="5", b="10"
console.log(a+b);//"510"
let c=+a//5
let d=+b//10
console.log(c+d);//15
console.log(+a+(+b));//15


