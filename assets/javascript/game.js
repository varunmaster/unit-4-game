//Generating the list from 19 --> 120 (inclusive) and will not be changing this list again so const is used (same logic for genValList)
const numList = [];
for (var i = 19; i < 121; i++) { //doing < 121 bc we want 120 to be inclusive when we do math.random()
    numList.push(i);
}

const gemValList = [];
for (var i = 1; i < 13; i++) { //doing < 13 bc we want 12 to be inclusive when we do math.random()
    gemValList.push(i);
}

var targetNum = getTargetNum();

var gemObj = {
    "emerald": setGemValues(),
    "diamond": setGemValues(),
    "sapphire": setGemValues(),
    "ruby": setGemValues()
};
var userNumTotal = 0;
var gameComplete = isUserOver();
var wins = 0;
var loss = 0;
assginValuesToGems();


$(document).ready(function () {
    $(".targetNum").text(targetNum);
    $(".gem").on("click", function () { //this refers to any of the "gem" class pressed in html
        console.log("adding value: ", parseInt($(this).val()));
        userNumTotal += (parseInt($(this).val()));
        $(".targetNum").text(targetNum);
        $(".userNumTotal").text(userNumTotal);
        if (userNumTotal > targetNum) {
            console.log("user went over...resetting");
            loss++;
            $(".loss").text(loss);
            $(".score-body").text("You lost!!");
            newGame();
            console.log("loss: ", loss);
        } else if (userNumTotal === targetNum) {
            console.log("user won...resetting");
            wins++;
            $(".wins").text(wins);
            $(".score-body").text("You Won!!");
            newGame();
            console.log("wins: ", wins);
        }
        console.log("targetNum: ", targetNum);
        console.log("emerald", gemObj.emerald);
        console.log("diamond", gemObj.diamond);
        console.log("sapphire", gemObj.sapphire);
        console.log("ruby", gemObj.ruby);
    });

}); //Document.ready ends here


function assginValuesToGems() {
    $(".emerald").attr("value", gemObj.emerald);
    $(".diamond").attr("value", gemObj.diamond);
    $(".sapphire").attr("value", gemObj.sapphire);
    $(".ruby").attr("value", gemObj.ruby);
}

function isUserOver() {
    if (parseInt(userNumTotal) > targetNum) {
        return true;
    }
}

function getTargetNum() {
    return numList[Math.floor(Math.random() * numList.length)];
}

function setGemValues() {
    return gemValList[Math.floor(Math.random() * gemValList.length)];
}

function newGame() {
    targetNum = getTargetNum();
    userNumTotal = 0;
    $(".targetNum").text(targetNum);
    $(".userNumTotal").text(userNumTotal);
    gemObj = {
        "emerald": setGemValues(),
        "diamond": setGemValues(),
        "sapphire": setGemValues(),
        "ruby": setGemValues()
    };
    assginValuesToGems();
}







/*
var userAnsArr = [];
var AnsArr = ["test2","test6"];
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var radio = [];

timeout = setTimeout(checkAnswers,120000); //if user doesn't submit in 120 seconds, do it automatically

$(document).ready(function (){
    $(".submit").on("click",function (){
        clearTimeout(timeout); //if the submit button is clicked then stop the timer
        // console.log(userAnsArr);
        checkAnswers();
        // console.log(numCorrect);
    }); //click ends here
});//doucment ends here

function checkAnswers() {
    radio = document.getElementsByClassName("question");
    console.log(radio);
    for(var i = 0; i < radio.length; i++){
        if((radio[i].checked.val()) && (radio[i] === AnsArr[i])) {
            return numCorrect += 1;
        }
        else if((radio[i].checked) && (radio[i] !== AnsArr[i])) {
            return numIncorrect += 1;
        }
        else if(!(radio[i].checked)) {
            return numUnanswered += 1;
        }
    }
}


// if(!$(".question").is(':checked')){
//     alert("checked");
// }
*/