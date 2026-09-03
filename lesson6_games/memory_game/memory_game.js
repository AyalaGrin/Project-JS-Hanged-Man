//נגדיר משתנה המייצג את מספר הכרטיסים הפתוחים
let numC = 0
let cardBefore
function game(num) {
    //ניגש לכרטיס עליו לחצו
    let card = document.getElementById("c" + num)
    numC++
    //נפתח את הכרטיס
    openCard(card)
    //נבדוק האם זה כרטיס שני:

    if (numC == 2) {
        //נבדוק התאמה בין הכרטיסים
        //נחפש בכרטיסים את הפסקאות
        let p1 = cardBefore.querySelector('p')
        let p2 = card.querySelector('p')
        //ונשווה את תוכן הפסקה
        if (p1.innerText == p2.innerText) {
            //אם מתאים: נשים מסגרת יפה לכרטיסים
            // className - עיצוב
            card.className = "good"
            cardBefore.className = "good"
        }

        //אם לא מתאים:
        else {
            //נסגור את שני הכרטיסים
            //יש לסגור את הכרטיסים לאחר 1.5 שניות
            setTimeout(
                () => {
                    closeCard(cardBefore)
                    closeCard(card)
                }
                , 1500)
        }
        //איפוס המשתנה הסופר את הכרטיסים הפתוחים
        numC = 0
    }
    //בלחיצה ראשונה יש לשמור את הכרטיס
    else
        cardBefore = card
}

function openCard(card) {
    //הצגת הכיתוב
    //חיפוש הפסקה
    let text = card.querySelector('p')
    // let text = document.querySelector('#c' + num + ' p')
    //נהפוך ללא מוחבא
    text.hidden = false
    //הצגת התמונה
    //חיפוש התמונה
    let pic = card.querySelector('img')
    //הצגתה
    pic.style.display = 'block'
    //הורדת הרקע בכרטיס
    card.style.backgroundImage = 'none'
}

//מקבלת כרטיס וסוגרת אותו
function closeCard(c) {
    //הסתרת כיתוב
    c.querySelector('p').hidden = true
    //הסתרת תמונה
    c.querySelector('img').style.display = "none"
    //הוספת רקע לכרטיס
    c.style.backgroundImage = "url('../Lesson_3_memoryGame/עוגות/לוגו.PNG')"
}

//פונקציות העובדות על טיימר
//מקבלתו 2 פרמטקים
//1. פעולה לביצוע
//2. זמן באלפיות השניה
// setInterval() - מפעיל את הפעולה כל טווח זמן כזה - כמו לולאה
// setTimeout() - מפעיל את הפעולה לאחר טווח זמן זה

// setTimeout(
//     //איך פונקציה הופכת לאנונימית / חץ?
//     //מאחר והיא מוכרת רק במקום בו הודגרה, וכרגע אני בתוך פונקציה
//     //לא נשתמש בזה במקום אחר ולכן אין צורך בשם
//     //function - הפונקציה נשלחת כפרמטר ולכן אין צורך להגדיר סוג
//     //אבל חובה להוסיף חץ בין כותרת הפונקציה לתוכן הפונקציה
//     //אם היא מכילה פעולה אחת לא חובה לשים צומדיים
//     ()=>a("sara")
//     ,2000
// )

// function a(n)
// {
//     alert(n+" ניתן להתחיל במשחק")
// }

