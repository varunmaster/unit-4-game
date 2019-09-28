//Generating the list from 19 --> 120 (inclusive) and will not be changing this list again so const is used (same logic for genValList)
const numList = [];
for(var i = 19; i < 121; i++) { //doing < 121 bc we want 120 to be inclusive when we do math.random()
    numList.push(i);
}

const gemValList = [];
for(var i = 1; i < 13; i++){ //doing < 13 bc we want 12 to be inclusive when we do math.random()
    gemValList.push(i);
}

var targetNum = getTargetNum();
var gemArr = {
    "emerald": setGemValues(),
    "diamond": setGemValues(),
    "sapphire": setGemValues(),
    "ruby": setGemValues()
};
var userNumTotal = 0;
var gameComplete = isGameComplete();


$(document).ready(function(){

    $(".gem").on("click", function() { //this refers to any of the "gem" class pressed in html
        userNumTotal += ($(this).val());
    }); 

});








function isGameComplete(){
    if(parseInt(userNumTotal) > targetNum){
        return true;
    }
}

function getTargetNum() {
    return numList[Math.floor(Math.random() * numList.length)];
}

function setGemValues() { 
    return gemValList[Math.floor(Math.random() * gemValList.length)];
}

console.log("targetNum: ", targetNum);
console.log("gem", gemArr.emerald);
console.log("gem", gemArr.diamond);
console.log("gem", gemArr.sapphire);
console.log("gem", gemArr.ruby);
