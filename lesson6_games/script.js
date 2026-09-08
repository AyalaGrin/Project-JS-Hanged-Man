/*
קוד גאבה סקריפט לדפים : דף הבית, התחברות והרשמה.
*/
//------------------- פונקציה בזמן הטעינה------------------
window.onload = function() {
    // בודקים אם יש משתמש מחובר ומציגים הודעת ברוך הבא
    // בודקים רק בזיכרון הזמני (session)
    //כיוון שבהמשך שמרתי בזיכרון הזמני את שם המשתמש שהתחבר או נרשם
    // אז אם כרגע השם נמצא בזיכרון הזמני סימן שהמשתמש מחובר 
    // אז הוא יכול לשחק וגם השם שלו מופיע בהודעת ברוך הבא
    const loggedUser = sessionStorage.getItem('currentUser');
    const welcomeMsg = document.getElementById('welcome-message');

    if (loggedUser && welcomeMsg) {
        welcomeMsg.innerText = "שלום, " + loggedUser + "!";
    } else if (welcomeMsg) {
        welcomeMsg.innerText = "שלום, אורח!";
    }
    //-----------בדיקות תקינות על ידי האזנה לאירוע-------------
    // בדיקות התקינות נמצאות בפונקציה הזאת כדי שהן יופעלו בזמן אמת

    // ביטוי רגולרי שמחפש האם קיימת אות בעברית בתוך הטקסט
    //מגדירה אותו פה כדי לא ליצור פעמיים
    const hebrewRegex = /[\u0590-\u05FF]/;

    // ------ בדיקת תקינות המייל------
    const chekemail = document.getElementById('email');  //שליפת התגית של המייל מהדף
    if (chekemail) {  //בדיקה אם התגית קיימת בדף כדי למנוע קריסה אם יש דפים שאין בהם את השדה הזה
        chekemail.addEventListener('input', function() { //האזנה לאירוע של הקלדת מייל 
            let emailValue = this.value;                 
            const emailError = document.getElementById('email-error'); //הודעת טקסט שתופיע במקרה של שגיאה
            
            if (!emailError) return; // הגנה מקריסה אם יש דפים שאין בהם את השדה הזה
           //בדיקה אם האות שהוקלדה בעברית
            if (hebrewRegex.test(emailValue)) {  
                emailError.innerText = "אותיות באנגלית בלבד!"; //הודעת השגיאה
                this.style.color = "red";  //סימון הטקסט באדום
            } 
            //בדיקה אם יש טקסט אבל הוא לא כולל את הסיומת של מייל תקין
            else if (emailValue && !emailValue.includes("@gmail.com")) {  
                emailError.innerText = "אממ זה לא נראה כמו כתובת מייל...";
                this.style.color = "red";
            } 
            // אם עבר את כל הבדיקות הקודמות, אז הוא תקין
            else {
                emailError.innerText = ""; // נקי משגיאות
                this.style.color = "black"; // מחזיר לצבע שחור  
            }
        });
    }

    // ----- בדיקת תקינות הסיסמה-------  
    const chekpass = document.getElementById('password'); //שליפת התגית של הסיסמה מהדף
    if (chekpass) {//בדיקה אם התגית קיימת בדף כדי למנוע קריסה אם יש דפים שאין בהם את השדה הזה
        chekpass.addEventListener('input', function() { //האזנה לאירוע של הקלדת סיסמה
            let passValue = this.value;
            const passError = document.getElementById('pass-error');//הודעת טקסט שתופיע במקרה של שגיאה

            if (!passError) return; // הגנה מקריסה אם יש דפים שאין בהם את השדה הזה

            // בדיקה האם יש לפחות אות אחת ולפחות מספר אחד
            const hasLetter = /[a-zA-Z]/.test(passValue);
            const hasDigit = /[0-9]/.test(passValue);
            
            //בדיקה אם האות שהוקלדה בעברית
            if (hebrewRegex.test(passValue)) {
                passError.innerText = "אותיות באנגלית בלבד!";//הודעת השגיאה
                this.style.color = "red";
            } 
            //בדיקה אם יש טקסט אבל הוא פחות מ 6 תווים 
            else if (passValue.length > 0 && passValue.length < 6) {
                passError.innerText = "הסיסמה חייבת להיות לפחות 6 תווים";//הודעת השגיאה
                this.style.color = "red";
            } 
            //בדיקה אם בסיסמא חסר אות או מספר
            else if (passValue.length >= 6 && (!hasLetter || !hasDigit)) {
                passError.innerText = "הסיסמה חייבת לכלול אותיות ומספרים";//הודעת השגיאה
                this.style.color = "red";
            } 
            // אם עבר את כל הבדיקות הקודמות, אז הוא תקין
            else {
                passError.innerText = ""; // נקי משגיאות
                this.style.color = "black"; // מחזיר לצבע שחור
            }
        });
    }
}

//------------------- פונקצית ההרשמה-----------------------
function registerUser() {
    console.log("registerUser function started");
    // הגדרת משתנים שיהיו שווים לערכים שיש בשדות בטופס ההרשמה
    let name = document.getElementById("name").value;
    let familyName = document.getElementById("family-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    // בדיקה אם אחד מהשדות ריק
    if (!name || !email || !password || !familyName) {
        alert("נא למלא את כל השדות!");
        return;
    }

    const hebrewRegex = /[\u0590-\u05FF]/; //    ביוטי רגולרי שבודקת אות בעברית בתוך הטקסט
    const hasLetter = /[a-zA-Z]/.test(password); // בדיקה האם יש לפחות אות אחת בסיסמה
    const hasDigit = /[0-9]/.test(password);  // בדיקה האם יש לפחות מספר אחד בסיסמה

    // בדיקה סופית של כל התנאים
    //כיוון שעל ידי האזנה לאירועי הקלדה לא מכריחים את המשתמש להקשיב לכללים
    //אז כדי שלא יוכל להרשם אם אחד התנאים לא טוב-
    //אם המייל בעברית
    // אם הוא לא מכיל סיומת תקינה
    //אם הסיסמא בעברית
    //אם הסיסמא קצרה מדי
    //אם אין בה אות או מספר
    //אז מדפיס הודעת שגיאה שלא תאפשר להרשם
    if (hebrewRegex.test(email) || !email.includes("@gmail.com") || 
        hebrewRegex.test(password) || password.length < 6 || !hasLetter || !hasDigit) {
        alert("נתונים לא תקינים!");
        return;
    }
//אם ממשיך אז המשתמש הזין נתונים תקינים, 
// הכנסה למחסנית זיכרון הקבוע
//כדי שפעם הבאה הוא לא יצטרך להרשם מחדש רק להתחבר לחשבון שלו

    // יצירת האובייקט עם שמות שדות קבועים 
    //מכניסה את הנתונים שהמשתמש הזין לשדות של האובייקט
    let newUser = {
        name: name,
        familyName: familyName,
        email: email,
        password: password
    };
    
    // שליפה מהמאגר הקבוע מערך משתמשים -או יצירת חדש אם לא קיים
    let usersArr = JSON.parse(localStorage.getItem('allUsers')) || [];

    // בדיקה אם המייל קיים
    // אם כן אז כבר יש לו חשבון ומעבירה להתחברות ישר
    let emailExists = usersArr.find(u => u.email === email);
    if (emailExists) {
        alert("המייל הזה כבר רשום! מעביר להתחברות...");
        window.location.href = 'login.html'; 
        return;
    }
    //אם הגיע לכאן סימן שהמייל לא קיים ולכן מכניסה את המשתמש כמשתמש חדש למערך משתמשים
    // שמירה במאגר הקבוע
    usersArr.push(newUser);
    localStorage.setItem('allUsers', JSON.stringify(usersArr));
    console.log("המשתמש החדש שנוצר:", newUser);

    // חיבור זמני בלבד
    //כדי שהשם יופיע מעכשיו בהודעת הכניסה
    // וכך אני ידע שהוא נרשם ויכול לשחק
    sessionStorage.setItem('currentUser', name);
    
    alert(name + ", נרשמת בהצלחה!");
    window.location.href = 'home.html';//מעבירה אוטומית לדף בית
}

//------------------- פונקציית ההתחברות---------------------
function loginUser() {
    console.log("פונקציית התחברות הופעלה");
    // הגדרת משתנים שיהיו שווים לערכים שיש בשדות בטופס ההתחברות
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;
    //שליפת המאגר הקבוע כדי לבדוק אם המשתמש קיים
    //על ידי השוואת המייל והסיסמא אם הם שווים לאחד מהמשתמשים שכבר קיימים במאגר
    let usersArr = JSON.parse(localStorage.getItem('allUsers')) || [];
    const user = usersArr.find(u => u.email === emailInput && u.password === passInput);
    //אם המשתמש קיים אז שומר את שמו בזיכרון הזמני כדי להציג אותו בהודעת ברוך הבא
    if (user) {
        sessionStorage.setItem('currentUser', user.name);
        window.location.href = 'home.html';//מעבירה לדף הבית כי הוא לא צריך להרשם...
    } 
    //אם המשתמש לא נמצא אז מדפיס הודעת שגיאה ומעביר לדף הרשמה
    else {
        alert("משתמש לא נמצא. נא להירשם.");
        window.location.href = './הרשמה.html';
    }
}

//--------- פונקציית בדיקת התחברות לפני כניסה למשחקים---------
//מקבלת נתיב לדף משחק כלשהו כדי שאני יוכל להעביר את המשתמש אליו אם הוא מחובר
function checkLogin(game) {
    //שליפה מהמאגר הזמני כדי לבדוק אם קיים שם משתמש כרגע
    const loggedUser = sessionStorage.getItem('currentUser');
    if (loggedUser) { //אם כן יכול להכנס למשחק
        window.location.href = game; //שליחה לדף של המשחק הנבחר
    } else { //אחרת הודעה שצריך להחבר
        alert("נא להתחבר כדי לשחק!");
    }
}