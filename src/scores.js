//Tasked to caluclate scores
let scoreButton = document.querySelector("#display-scores");

function calculateScores() {
    let highscores = JSON.parse (
        window.localStorage.getItem("scores")
    ) || [];
    highscores.sort(function (a,b){
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        let liScores = document.createElement("li");
        liScores.textContent = score.name + " - " + score.score;
        let olScores = document.getElementById("scores");
        olScores.appendChild(liScores);
    });
}


//Task to clear user scores
function resetScores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}

document.getElementById("reset").onclick = resetScores;

calculateScores();