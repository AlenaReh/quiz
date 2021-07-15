var previousScoreList = JSON.parse(localStorage.getItem("highScoreList")) || [];
var resetButton = document.querySelector(".reset-button");
//var highScoreList = document.getElementById("playerScoreList");

//forEach
for (i = 0; i < previousScoreList.length; i++) {
  console.log("eachPlayerScore", previousScoreList[i]);
  //create an li element
  var liEl = document.createElement("li");
  //add text to  li tag
  liEl.textContent=previousScoreList[i].initials + " - " + previousScoreList[i].finalScore;
  //append element to the ol list
  var OlElement = document.getElementById("playerScorelist");
  OlElement.append(liEl);

}

resetButton.addEventListener("click", resetScores);
//reset
function resetScores () {
    localStorage.clear("previousScoreList");
    location.reload();
}
