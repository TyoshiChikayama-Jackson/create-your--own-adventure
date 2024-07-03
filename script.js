//Start Screen
let startingPage = document.querySelector (".startingPage");
let titlePage = document.querySelector (".title");
//1 Scenario One First Page 
let scenarioOneScreen = document.querySelector (".scenarioOneScreen");
//1:2 Scenario One 2nd Page 
let optionOneScreen = document.querySelector (".optionOneScreen");
//2 Scenario Two 2nd Page
let optionTwoScreen = document.querySelector (".optionTwoScreen");
//1:End Scenario One 3rd Page 
let lastOptionOneScreen = document.querySelector (".lastOptionOneScreen");
//2:End Scenario Two 3rd Page
let lastOptionTwoScreen = document.querySelector (".lastOptionTwoScreen");
// Reset Button
let resetButtonOne = document.querySelector (".restartOneButtons")

let lastOptionOneScreenTwo = document.querySelector(".lastOptionOneScreenTwo")
let lastOptionTwoScreenTwo = document.querySelector(".lastOptionTwoScreenTwo")
let lastOptionTwoScreenFour = document.querySelector(".lastOptionTwoScreenFour")
// buttons

// Start Screen Buttons 
let optionStart = document.querySelector (".startButton");
//1 Scenario One First Page Buttons
let scenarioButtonsOne = document.querySelector (".scenarioButtonsOne");
let scenarioOneButtonOne = document.querySelector (".scenarioOneButtonOne");
let scenarioOneButtonTwo = document.querySelector (".scenarioOneButtonTwo");
//1:2 Scenario One 2nd Page Buttons
let optionOneScreenButtons = document.querySelector (".optionOneScreenButtons");
let scenarioOneButtonThree = document.querySelector (".scenarioOneButtonThree");
let scenarioOneButtonFour = document.querySelector (".scenarioOneButtonFour");
//2 Scenario Two 2nd Page Buttons
let optionsTwoScreenButtons = document.querySelector (".optionsTwoScreenButtons");
let scenarioTwoButtonThree = document.querySelector (".scenarioTwoButtonThree");
let scenarioTwoButtonFour = document.querySelector (".scenarioTwoButtonFour");
//1: End Scenario One 3rd Page Buttons
let lastOptionOneScreenButtons = document.querySelector (".lastOptionOneScreenButtons");
let scenarioOneEndOne = document.querySelector (".scenarioOneEndOne");
let scenarioOneEndTwo = document.querySelector (".scenarioOneEndTwo");
//2 End Scenario Two 3rd Page Buttons
let lastOptionTwoScreenButtons = document.querySelector (".lastOptionTwoScreenButtons");
let scenarioTwoEndOne = document.querySelector (".scenarioTwoEndOne");
let scenarioTwoEndTwo = document.querySelector (".scenarioTwoEndTwo");
// REset Button 
let restartButton = document.querySelector(".restartButton")
// .style.display = "block"
// .style.display = "none"
// .style.display = "inline-block"

optionStart.addEventListener ("click", function(){
    titlePage.style.display = "none"
    startingPage.style.display = "none"
    scenarioOneScreen.style.display = "block"
    optionOneScreen.style.display = "none"
    optionTwoScreen.style.display = "none"
    lastOptionOneScreen.style.display = "none"
    lastOptionTwoScreen.style.display = "none"
    scenarioButtonsOne.style.display = "block"
    scenarioOneButtonOne.style.display = "inline-block"
    scenarioOneButtonTwo.style.display = "inline-block"

});
scenarioOneButtonOne.addEventListener("click", function(){
    startingPage.style.display = "none"
    scenarioOneScreen.style.display = "none"
    optionOneScreen.style.display = "block"
    optionTwoScreen.style.display = "none"
    lastOptionOneScreen.style.display = "none"
    lastOptionTwoScreen.style.display = "none"
    scenarioButtonsOne.style.display = "none"
    scenarioOneButtonTwo.style.display = "none"
    optionOneScreenButtons.style.display = "block"
    scenarioOneButtonThree.style.display = "inline-block"
    scenarioOneButtonFour.style.display = "inline-block"
    optionsTwoScreenButtons.style.display = "none"
    scenarioTwoButtonThree.style.display = "none"
    scenarioTwoButtonFour.style.display = "none"
    lastOptionOneScreenButtons.style.display = "none"
    scenarioOneEndOne.style.display = "none"
    scenarioOneEndTwo.style.display = "none"
    lastOptionTwoScreenButtons.style.display = "none"
    scenarioTwoEndOne.style.display = "none"
    scenarioTwoEndTwo.style.display = "none"

});
scenarioOneButtonThree.addEventListener("click", function(){
    startingPage.style.display = "none"
    scenarioOneScreen.style.display = "none"
    optionOneScreen.style.display = "none"
    optionTwoScreen.style.display = "none"
    lastOptionOneScreen.style.display = "block"
    lastOptionTwoScreen.style.display = "none"
    scenarioButtonsOne.style.display = "none"
    scenarioOneButtonTwo.style.display = "none"
    optionOneScreenButtons.style.display = "none"
    scenarioOneButtonThree.style.display = "none"
    scenarioOneButtonFour.style.display = "none"
    optionsTwoScreenButtons.style.display = "none"
    scenarioTwoButtonThree.style.display = "none"
    scenarioTwoButtonFour.style.display = "none"
    lastOptionOneScreenButtons.style.display = "block"
    scenarioOneEndOne.style.display = "inline-block"
    scenarioOneEndTwo.style.display = "inline-block"
    lastOptionTwoScreenButtons.style.display = "none"
    scenarioTwoEndOne.style.display = "none"
    scenarioTwoEndTwo.style.display = "none"
}); 
scenarioOneButtonTwo.addEventListener("click", function (){
    startingPage.style.display = "none"
    scenarioOneScreen.style.display = "none"
    optionOneScreen.style.display = "none"
    optionTwoScreen.style.display = "block"
    lastOptionOneScreen.style.display = "none"
    lastOptionTwoScreen.style.display = "none"
    scenarioButtonsOne.style.display = "none"
    scenarioOneButtonTwo.style.display = "none"
    optionOneScreenButtons.style.display = "none"
    scenarioOneButtonThree.style.display = "none"
    scenarioOneButtonFour.style.display = "none"
    optionsTwoScreenButtons.style.display = "block"
    scenarioTwoButtonThree.style.display = "inline-block"
    scenarioTwoButtonFour.style.display = "inline-block"
    lastOptionOneScreenButtons.style.display = "none"
    scenarioOneEndOne.style.display = "none"
    scenarioOneEndTwo.style.display = "none"
    lastOptionTwoScreenButtons.style.display = "none"
    scenarioTwoEndOne.style.display = "none"
    scenarioTwoEndTwo.style.display = "none"
});
scenarioOneButtonFour.addEventListener("click", function (){
    startingPage.style.display = "none"
    scenarioOneScreen.style.display = "none"
    optionOneScreen.style.display = "none"
    optionTwoScreen.style.display = "none"
    lastOptionOneScreen.style.display = "none"
    lastOptionTwoScreen.style.display = "none"
    scenarioButtonsOne.style.display = "none"
    scenarioOneButtonTwo.style.display = "none"
    optionOneScreenButtons.style.display = "none"
    lastOptionOneScreenTwo.style.display ="block"
    restartButton.style.display = "inline-block"
});
 restartButton.addEventListener("click", function (){

 location.reload()

});

scenarioTwoButtonThree.addEventListener("click", function (){
    startingPage.style.display = "none"
    scenarioOneScreen.style.display = "none"
    optionOneScreen.style.display = "none"
    optionTwoScreen.style.display = "none"
    lastOptionOneScreen.style.display = "none"
    lastOptionTwoScreen.style.display = "none"
    scenarioButtonsOne.style.display = "none"
    scenarioOneButtonTwo.style.display = "none"
    optionOneScreenButtons.style.display = "none"
    lastOptionTwoScreenTwo.style.display ="block"
    restartButton.style.display = "inline-block"
    scenarioTwoButtonThree.style.display = "none"
    scenarioTwoButtonFour.style.display = "none"
    
});

scenarioTwoButtonFour.addEventListener ("click", function (){
    startingPage.style.display = "none"
    scenarioOneScreen.style.display = "none"
    optionOneScreen.style.display = "none"
    optionTwoScreen.style.display = "none"
    lastOptionOneScreen.style.display = "none"
    lastOptionTwoScreen.style.display = "none"
    scenarioButtonsOne.style.display = "none"
    scenarioOneButtonTwo.style.display = "none"
    optionOneScreenButtons.style.display = "none"
    lastOptionTwoScreenTwo.style.display ="none"
    restartButton.style.display = "inline-block"
    scenarioTwoButtonThree.style.display = "none"
    scenarioTwoButtonFour.style.display = "none"
    lastOptionTwoScreenFour.style.display ="block"
})