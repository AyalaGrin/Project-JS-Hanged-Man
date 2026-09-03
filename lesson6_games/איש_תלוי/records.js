// בעת טעינת הדף, נפעיל אוטומטית את הפונקציה שמציגה את טבלת השיאים
window.onload = function() {
    recordWin();
}
// ---------------הפונקציה שמציגה את טבלת השיאים--------------------
function recordWin() {

    //שליפת מערל המנצחים מהמאגר הקבוע-או יצירת חדש אם אין כזה
let wins = JSON.parse(localStorage.getItem('Winners')) || [];
console.log("Sorted wins:", wins);

// ניגשים לדיב המיכל (container) שבו נרצה לשתול את הטבלה ומאפסים את התוכן שלו
let container = document.getElementById('wins-container');
container.innerHTML = ""; 

// יצירת אלמנט הטבלה הראשי (<table>) ושורת הכותרות שלה (<tr>)
let table = document.createElement('table');
let headerRow = document.createElement('tr');

//עמודות לשם,מהירות ותאריך שיהיו בטבלה
// והגדרת הטקסט שיופיע בהן
let thName = document.createElement('th');
thName.innerText= "Name";
let thSpeed = document.createElement('th');
thSpeed.innerText= "Speed (seconds)";
let thDate = document.createElement('th');
thDate.innerText= "Date";

// חיבור עמודות הכותרת לשורת הכותרת, וחיבור השורה כולה לטבלה
headerRow.appendChild(thName);
headerRow.appendChild(thSpeed);
headerRow.appendChild(thDate);
//יצירת הטבלה והכנסה של השורת כותרת
table.appendChild(headerRow);

// בדיקה אם מערך המנצחים ריק, נציג הודעה מתאימה למשתמש ונעצור את ריצת הפונקציה
if (wins.length === 0) {
        container.innerText = "אין עדיין ניצחונות רשומים.";
        return;
    }
// לולאה שרצה על כל האובייקטים במערך המנצחים כדי לייצר שורה עבור כל מנצח
for (let i = 0; i < wins.length; i++) {
    //יצירת שורה חדשה
let row = document.createElement('tr');
//יצירת תא לשם והכנסת השם שבאיבר הנוכחי במערך
let rowName = document.createElement('td');
rowName.innerText = wins[i].name;
//יצירת תא למהירות והכנסת המהירות של השחקן באיבר הנוכחי..
let rowSpeed = document.createElement('td');
rowSpeed.innerText = wins[i].speed;
//יצירת תא לתאריך...כנל
let rowDate = document.createElement('td');
rowDate.innerText = wins[i].date;

// חיבור שלושת תאי הנתונים לשורת השחקן הנוכחי
row.appendChild(rowName);
row.appendChild(rowSpeed);
row.appendChild(rowDate);

// חיבור השורה המוכנה אל הטבלה הראשית
table.appendChild(row); 
}
// הוספת הטבלה השלמה והמלאה בנתונים אל תוך הדיב המיכל במסך
container.appendChild(table);

}

//-----פונקציה שמוחקת את טבלת השיאים-------------
function clearWins(){
    //מוחקת מהמאגר הנוכחי את המערך של המנצחים
    localStorage.removeItem('Winners');
    alert("היסטוריית הניצחונות נמחקה!");
    //מרענת את הדף שוב ואז מופיעה ההודעה שיש בפונקציה שמופעלת עם טעינת הדף
    window.location.reload();
}