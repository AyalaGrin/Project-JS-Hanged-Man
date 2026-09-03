let winCount = 0;
let failCount = 0;
let targetCount = 0; 
let emojiList = ["🤩", "🤖", "👽", "🦄", "👻", "🤡", "😴", "😎"];
let currentTarget = "";

function startGame() {
    winCount = 0;
    failCount = 0;
    targetCount = 0; 
    document.getElementById("wins").innerText = 0;
    document.getElementById("fails").innerText = 0;
    document.getElementById("msg").innerText = "";
    document.getElementById("board").innerHTML = "";

    currentTarget = emojiList[Math.floor(Math.random() * emojiList.length)];
    document.getElementById("target").innerText = currentTarget;

    for (let i = 0; i < 60; i++) {
        let randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
        
        if (randomEmoji === currentTarget) {
            targetCount++;
        }

        let btn = document.createElement("button");
        btn.innerText = randomEmoji;
        btn.className = "emoji-btn";

        btn.onclick = function() {
            if (btn.innerText === currentTarget) {
                winCount++;
                document.getElementById("wins").innerText = winCount;
                btn.style.visibility = "hidden";

                 if (winCount === targetCount) {
                    document.getElementById("msg").innerText = "כל הכבוד! ניצחת ומצאת את כולם! 🎉";
                    document.getElementById("board").innerHTML = ""; 
                }
            } else {
                failCount++;
                document.getElementById("fails").innerText = failCount;
                
                if (failCount >= 10) {
                    document.getElementById("msg").innerText = "הפסדת! צברת יותר מ-10 כשלונות ⛔";
                    document.getElementById("board").innerHTML = "";
                }
            }
        };
        document.getElementById("board").appendChild(btn);
    }
}

startGame();