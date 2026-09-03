
// מה נלמד היום?
// 1. אובייקטים
// 2. שמירת מידע על התגית
// 3. איפוס מסך

// אובייקט - משתנה שיש לו כמה תכונות
// אין צורך להגדיר מראש תבנית - מחלקה,
// אלא כאשר יוצרים את האובייקט
// מחליטים מה יהיו התכונות שלו
// let student={
//     fullName:"sara levi",
//     email:"sl@gmail",
// }
// שימוש במאפייני האובייקט
// console.log(student.email);


// נגדיר מערך אובייקטים
// לכל אובייקט תמונה ושם קטגוריה
let arr = [
    {
        pic: "😍",
        cat: "אמוגי", color: "yellow"
    },
    {
        pic: "😘", cat: "אמוגי", color: "yellow"
    },
    {
        pic: "😜", cat: "אמוגי", color: "yellow"
    }, { pic: "🤔", cat: "אמוגי", color: "yellow" },
    { pic: "🍉", cat: "פירות", color: "green" },
    { pic: "🍌", cat: "פירות", color: "green" },
    { pic: "🍒", cat: "פירות", color: "green" },
    { pic: "🍇", cat: "פירות", color: "green" },
    { pic: "🚗", cat: "תחבורה", color: "blue" },
    { pic: "🚋", cat: "תחבורה", color: "blue" },
]

// תגית הכותרת
let t = document.getElementById('title')

// משתנה המכיל את קוד הטיימר
let timer

function start() {
    // חיפוש לוח המשחק
    let board = document.getElementById("board")
    // innerHTML - כל מה שיש בין תגית פותחת לסוגרת
    // וזו דרך נוחה לאפס מסך (למחוק הרבה אלמנטים בשטחאחד)
    board.innerHTML=''
    // ניצור על המסך 50 תמונות עי הגרלה

    // איפוס הטיימר
    clearInterval(timer)

    for (let index = 0; index < 50; index++) {
        //    נגריל מספר 
        let r = Math.floor(Math.random() * arr.length)
        // ניצור כפתור
        let b = document.createElement('button')
        // נשים עליו את התמונה
        b.innerText = arr[r].pic
        // נוסיף הקשבה לארוע לחיצה
        b.addEventListener('click', play)

        // עד עכשיו השתמשנו במאפיינים מתאימים לתגית
        // שהשפיעו על הנראות
        // ניתן לשמור מידע - שלא ישפיע על הנראות
        // מטרתו רק שמירת מידע עבור התגית
        // עי המילה השמורה dataset
        // ואז נבחר שם למאפיין שלנו ונציב בו ערך
        b.dataset.category = arr[r].cat
        b.dataset.color = arr[r].color

        // נוסיף אותו על המסך
        board.appendChild(b)
    }
    // נציג על המסך למעלה שם של קטגוריה
    let r1 = Math.floor(Math.random() * arr.length)
    t.innerText = arr[r1].cat

    timer=setInterval(() => {
        r1 = Math.floor(Math.random() * arr.length)

        t.innerText = arr[r1].cat
    }, 3000);
}


function play() {
    // בידקה האם מי שלחצו עליו 
    // תואם לקטגוריה למעלה

    // מה כתוב למעלה?
    let c = t.innerText
    // מה יש על הכפתור עליו לחצו

    // בכל ארוע ישנו משתנה בשם event
    // משתנה זה מכיל מידע על הארוע
    // נפרט בשיעורים הבאים
    // וכרגע נתמקד במאפיין חשוב ושימושי
    // currentTarget - התגית עליה מוגדר הארוע שהפעיל את הפונקציה
    console.log(event.currentTarget);
    let cb = event.currentTarget
    //גישה למידע השמור
    let currentC = cb.dataset.category
    if (currentC == c)
        cb.style.backgroundColor = cb.dataset.color
    else
        cb.style.backgroundColor = 'red'

    // לאיזה קטגוריה הוא שייך?

}

