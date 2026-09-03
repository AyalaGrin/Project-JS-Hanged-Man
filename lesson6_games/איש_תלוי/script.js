//-----------------קובץ גאבה סקריפט למשחק האיש התלוי-------------


 //עוד לפני הטעינה הגדרתי מערך מחרוזות קבוע למשחק הזה   
const Sentences=[
    "קאמטק",
    "גאוה",
    "סקיול",
    "מונגו",
    "גאבה סקריפט",
    "מתמטיקה",
    "מערכות ספרתיות",
    "סקיול",
    "אלגוריתמים",
    "מבני נתונים"
];
//הגדרת משתנים גלובליים מחוץ לפונקציות כדי שכולם יכירו אותם
//כך אני יוכל להשתמש בהם ולשנות אותם לאורך כל הקוד
let randomSentences=0; //משתנה שיבחר רנדומלית ביטוי-מחרוזת בכל תחילת משחק
let errorCount = 0;    //מונה שיספור כמות טעויות
let victoryCount = 0;  //מונה שיספור כמות אותיות נכונות
const alphabet = "אבגדהוזחטיכךלמםנןסעפףצץקרשת"; //מחרוזת שמכילה את כל אותיות האלף-בית
const keyboard = document.getElementById('keyboard-container'); //מקלדת -מקבלת את התגית מהדף
let time = new Date(); //הגדרת משתנה לזמן
let totalLettersOnly = 0;//מונה למספר האותיות -ללא רווחים


//-------------פונקציה בזמן הטעינה----------------------
window.onload  = function start(){
    //מאתחלת את המשתנה לזמן העכשווי-בשביל למדוד שיאים של זמנים
    time = new Date();
    //בשביל ליצור את המקלדת עוברת על המחרוזת האלף-בית
    //יוצרת בכל פעם כפתור חדש
    //מכניסה לו לטקסט את האיבר הנוכחי במחרוזת-אחת מאותיות האלף בית לפי הסדר
    for (let i=0; i<alphabet.length; i++) {
    let button = document.createElement('button');
    button.innerText = alphabet[i];
    //יצירת id לכל כפתור שהוא האות עצמה
    //כדי שבהמשך כישלחצו על האות במקלדת הפיזית
    //אני יוכל ישר לגשת אליה על ידי 
    //document.getElementById
    //בלי צורך בלולאות חיפוש אחריה 
    //ואני אני יוכל לשנות את הצבע ואת האפשרות ללחוץ על האות שוב
    button.id = alphabet[i];
    //מוסיפה לכפתור מחלקה עיצוב
    //ככה מעצבת את כל הכפתורים יחד באותו עיצוב 
    //אחרי שהגדרתי בדף עיצוב סלקטור .key
    //כיון שבמקלדת אין innertext אלה key זה יעזור לי בהמשך
    button.classList.add('key');
    //האזנה לאירוע לחיצה על המקלדת הוירטואלית 
    button.addEventListener('click', play);    
  
    console.log(document.getElementById('keyboard-container'));
    //יצירה של הכפתור על המסך
    document.getElementById('keyboard-container').appendChild(button);
    }
    //האזנה עבור לחיצה במקלדת הפיזית במחשב
    //keydown-לחיצה על המקלדת הפיזית
    //עבור כל אירוע כזה לבדוק את הערך שלו-key
    //אם האות הייתה בעברית אז שולחת לפונקציה המשחק
    //אחרת זאת לא נחשבת לחיצה... כי המשחק רק בעברית
      document.addEventListener('keydown', function(event){
        if(event.key >= 'א' && event.key <= 'ת') {
            play(event);
        }
    });

    //-------------בחירת מילה-מחרוזת רנדומלית מתוך המערך------
randomSentences = Sentences[Math.floor(Math.random() * Sentences.length)];

//ריצה על הביטוי שנבחר כדי ליצור לו פסים כאורך הביטוי
for(let i=0; i<randomSentences.length;i++)
{
    //יוצרת דיב חדש עבור כל אות
    let newletter= document.createElement('div')
//בעיצוב הגדרתי את העיצוב עם קו תחתי
//כאן קוראת למחלקת עיצוב על הדיב הנוכחי כדי שהיעצוב יחול עליו
    newletter.classList.add('letter-box')

    if (randomSentences[i] === " ") {//אם האות הנוכחית היא רווח-יקרה אם יש שתי מילים בביטוי
        newletter.style.borderBottom = "none"; //מבטל את הקו התחתי של הדיב
        newletter.style.width = "20px"; 
    } else {
        newletter.innerText = " "; //אם זו אות ולא רווח, אנחנו שמים בפנים טקסט ריק
        //רק כשהשחקן יגלה את האות היא תופיע
    }
    document.getElementById('word-display').appendChild(newletter)//יצירת הדיב על המסך
}

      //כיון שיכול להיות רווחים, שלא אמורים לגלות אותם
        //אני עוברת בלולאה עד סוף הביטוי ובודקת כמה אותיות יש לגלות-ללא רווחים
    for (let j = 0; j < randomSentences.length; j++) {
        if (randomSentences[j] !== " ") {
            totalLettersOnly++;
        }
    }
}
//-----------------פונקצית המשחק איש תלוי----------------------
function play(event){
  
//הפונקציה מקבלת אירוע-לחיצה על אות במקלדת הוירטואלית או הפיזית
let char;//משתנה שיכיל את האות שהתקבלה
let targetButton; //משתנה שיהיה הכפתור שלחצו עליו 

//הקשה על אות במקלדת הוירטואלית או הפיזית שונה
//אם האירוע הוא מסוג קליק זה אומר שזה בוירטואלית
//ולכן אלו דיבים שהוגדרו בקוד גאבה סקריפט יש לכל אחד את התכונה innertext
//אז אני מכניסה למשתנה שלי את הערך שיש באירוע שקיבלתי-האות שנלחצה
    if (event.type === "click") {
        char = event.currentTarget.innerText;
        targetButton = event.currentTarget;//הכפתור הנוכחי הוא איפה שממוקמת האות שנלחצה-התגית שלה
    }
    //אם לא סימן שזה אות שנלחצה במקלדת הפיזית
    //סוג אירוע אחר וגם הערך עצמו הוא לא innertext אלה key
    else {
        char = event.key;
        targetButton = document.getElementById(char);//כיון שלפני זה הגדרתי את הid שיהיה שווה לאות
        //אז עכשיו ניגשת אליו בצורה הזאת 
        //וכך מגיעה לכפתור שבו האות נמצאת 
    }
    //בודקת האם הכפתור הזה מאופשר ללחיצה
    //אם לא לא קורה כלום כיכבר אי אפשר ללחוץ עליו
    if ( targetButton.disabled) {
        return;
    }
    //אם הגיע לכאן סימן שהיה מאופשר ללחיצה ועכשיו משנה את זה
    //אין אפשרות ללחוץ על אות פעמיים..
    targetButton.disabled = true;
    targetButton.style.backgroundColor = '#ccc';//שינוי הצבע כדי שיהיה ברור שהאות שרופה
 
let found=false;// משתנה ברירת מחדל: האות לא נמצאה
//ריצה על הביטוי הסודי...
//יכול להיות שאות חוזרת על עצמה לכן לולאת for שחייבת לעבור על כל הביטוי.
for (let i=0; i<randomSentences.length;i++)
{
    //בודקת האם האות הנוכחית בביטוי שווה לאות שנלחצה
    if(randomSentences[i]===char)
    {  
    //אם כן, מגיעה למיקום הדיב שהגדרתי לפני לאותיות,
    //על ידי האינדקס של הלולאה אני מגיעה לאותו מקום ומכניסה לו את האות
     document.getElementsByClassName('letter-box')[i].innerText=char;

        found=true;//משנה את המשתנה לאמת כי מצאתי אות שווה לזאת שנלחצה
        victoryCount++;//מונה הניצחונות++
        console.log(victoryCount);
      
    //אם מספר האותיות שווה למספר הניצחונות=ניצחתי!!
        if(victoryCount===(totalLettersOnly))
        {
        //כתבתי את זה על ידי הפונקציה-setTimeout 
        // של 100 מילישניות כדי לתת לדפדפן זמן לעדכן קודם את האות האחרונה על המסך
       setTimeout(() => {
        alert("Congratulations! You won!    למשחק חדש לחץ על הכפתור");
       }, 100);
         
            disableKeyboard();//קריאה לפונקציה שמנטרלת את המקלדת הוירטואלית   
            InsertWin();//קריאה לפונקציה שבודקת את השיאים
       }
}
}
//אם לא מצאתי שום אות דומה-עברתי על הלולאה ולא הייתה אף אות תואמת
   if(!found)  {
        errorCount++;//מונה הטעויות++
        //מורידה דיב אחד שמסתיר את התמונה.
        //אני מגיעה לדיבים על ידי המיספור של מונה הטעויות+id=img
        //כך הגדרתי את הדיבים האלו בדף html
       document.getElementById('img'+(errorCount)).style.display = 'none';

        if(errorCount>=9)//אם הגעתי ל 9 טעויות=נפסלתי!!
        {
            //מעבר על כל הביטוי לבדוק אותיות שלא גיליתי כדי להראות אותם בצבע אדום
            for (let i=0; i<randomSentences.length;i++)
            {
                //בודקת את האות הנוכחית מול הדיב במיקום הזה במסך,הטקסט הפנימי שלו
                //אם הם לא שווים סימן שהדיב ההוא נשאר ריק ולא עם אות=לא גיליתי אותו
                //או שהוא רווח ולכן בודקת גם האם האות הנוכחית היא רווח
                if(randomSentences[i]!==document.getElementsByClassName('letter-box')[i].innerText && randomSentences[i]!==" ")
                {  
                    //אם האות היא לא רווח ולא גיליתי אותה אני מכניסה אותה עכשיו אבל משנה את הצבע לאדום
                    document.getElementsByClassName('letter-box')[i].innerText=randomSentences[i]
                    document.getElementsByClassName('letter-box')[i].style= "color:red";
                }
            }
            //הודעת הפסד
            alert("Game Over!  למשחק חדש לחץ על הכפתור");
             disableKeyboard();//שליחה לפונקציה שמנטרלת את המקלדת הוירטואלית
        }

    

}

}

//-----------------------פונקציה שמכניסה את השיא למערך השיאים ------------------
function InsertWin() {
    console.log("enter...");
//שליפת השם של המשתמש מהמאגר הזמני
let name = sessionStorage.getItem('currentUser');
let date= new Date();//זמן חדש-לסיום המשחק
//פיצול ושינוי המשתנה של הזמן-שיכיל שעה דקות ותאריך
let shortDate = date.toLocaleDateString() + " " + date.getHours() + ":" + date.getMinutes();
//אוביקט חדש עם שמות שדות קבועים
//מכניסה לשדות את הערכים-שם, תאריך, וזמן שלקח למשתמש לשחק
//לכן משתמשת במשתנה הגלובלי של הזמן פחות המשתנה העכשווי כך מגיעה לכמות השניות שלקח למשתמש לשחק
let newWiner = {
        name: name,
        speed: (new Date() - time)/1000,
        date: shortDate 
     };
//שליפה מהמאגר הקבוע מערך ניצחונות-או יצירת חדש אם לא קיים
    let wins = JSON.parse(localStorage.getItem('Winners')) || [];
    wins.push(newWiner);//הכנסת השיא הנוכחי
    //ממינת את המערך,בודקת לפי המהירות מי הכי קטנה
    wins.sort((a, b) => a.speed - b.speed);
    //אם גודל המערך גדול מ 3 אני מוחקת את האיבר האחרון
    //שמכיון שמיינתי אז האיבר האחרון הוא השיא הכי נמוך
    if (wins.length > 3) {
    wins.pop();}
    //בצורה זאת שומרת תמיד על 3 שיאים מקסימום
    //מכניסה למעגר את המערך הממוין המעודכן
localStorage.setItem('Winners', JSON.stringify(wins));
}

//-----------------------פונקציה שמנטרלת את המקלדת ------------------
function disableKeyboard(){
    // keyboard עוברת בלולאה על כל המקלדת-על ידי הפעלת כל הכפתורים שנמצאים ב 
    for(let i=0; i<keyboard.querySelectorAll('button').length; i++){
        //משנה ולא מאפשר לחיצה על הכפתור
        //משנה גם את הצבע שיראה ברור 
        keyboard.querySelectorAll('button')[i].disabled = true;
        keyboard.querySelectorAll('button')[i].style.backgroundColor = '#ccc'; 
    }
}

//-----------------------פונקציה שמנקה את המסך ------------------
function resetgame(){
    //כתבתי בפוקנציה כדי לא לחזור על הקוד כמה פעמים
 location.reload();
}