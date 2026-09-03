//יצירת תגיות דינאמית - בזמן ריצה
//כוללת 3 שלבים:
//1. יצירת התגית
// createElement([tagName])
//2. עדכון מאפיינים (לא חובה)
//3. הוספה למסך
//בשלב זה הרבה פעמים יש לחפש את תגית האב אליה נרצה להוסיף את התגית החדשה
//appendChild

for (let index = 0; index < 100; index++) {

    //יצירת תמונה על המסך
    //1.
    let newImg = document.createElement('img')
    //2.
    newImg.src = '../Lesson_3_memoryGame/עוגות/4.jpg'
    //3.
    document.body.appendChild(newImg)
}

for (let index = 1; index <= 10; index++) {

    //יצירת הכפתורים לטלפון
    //   <button>1</button>

    //1.
    let b = document.createElement('button')
    //2.
    if (index == 10)
        b.innerText = '0'
    else
        b.innerText = index

    //3.
    let phone = document.querySelector('div')
    phone.appendChild(b)
}