const prompt = require("prompt-sync")()

let score = 0
let choice = ""
let arrayQuestion = ["Quel est le plus petit pays du monde ?", "Quelle est la capitale de l'Australie ?", "Où se situe la tour de Pise ?", "Qui a gagné l'Euro 2016 de football ?", "Qui a gagné la ligue des champions de football 2005 ?" ]

let arrayAnswer = [
    ["Canada", "Monaco", "Luxembourg", "Vatican"],
    ["Melbourne", "Sydney", "Canberra", "Perth"],
    ["Turin", "Pise", "Rome", "Milan"],
    ["Portugal", "France", "Allemagne", "Gryffondor"],
    ["Bourg-en-Bresse", "Liverpool", "Les Avengers", "La réponse D"]
]

let goodAnswer = [arrayAnswer[0][3], arrayAnswer[1][2], arrayAnswer[2][1], arrayAnswer[3][0], arrayAnswer[4][1]]

for (let i = 0; i < arrayQuestion.length; i++) {
    console.log(arrayQuestion[i]);
    for (let j = 0; j < arrayAnswer[i].length; j++) {
        console.log(arrayAnswer[i][j]);
        
      
    }

    choice = prompt("quel est votre réponse ?")
    if (goodAnswer[i].toLowerCase() != choice.toLowerCase()) {
        console.log("perdu !");
    }else{
        console.log("gagner !");
        score++
    }
    
}

console.log("votre score: " + score + "/5");
