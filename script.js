// SIMPLE TIP CALCULATOR
const getResultsSimple = () => {
    personalTip();
    personalCost();
    individualTotal();
    results();
    handleDisplay();
}

//tip calculator
const personalTip = () => {
    const cost = document.querySelector(".cost").value;
    const people = document.querySelector(".people").value;
    const tipPercent = document.querySelector(".tip").value / 100;

    const totalTip = cost * tipPercent;
    const dividedTip = totalTip / people;

    return dividedTip.toFixed(2);
}
// cost per person calculator
const personalCost = () => {
    const cost = document.querySelector(".cost").value;
    const people = document.querySelector(".people").value;

    const dividedCost = cost / people;

    return dividedCost.toFixed(2);
}
// gets the total cost per individual
const individualTotal = () => {
    const cost = document.querySelector(".cost").value;
    const people = document.querySelector(".people").value;
    const tipPercent = document.querySelector(".tip").value / 100;

    const dividedCost = cost / people;
    const totalTip = cost * tipPercent;
    const dividedTip = totalTip / people;

    const soloTotal = dividedCost + dividedTip

    return soloTotal.toFixed(2);
} 
// display the results on page
const results = () => {
    document.querySelector(".tipPer").innerHTML = personalTip();
    document.querySelector(".costPer").innerHTML = personalCost();
    document.querySelector(".totalPer").innerHTML = individualTotal();
    document.querySelector(".personDisplay").innerHTML = document.querySelector(".people").value;
}

// SCREEN SWITCH CONTROLS
// turn off the form and display results
const handleDisplay = () => {
    document.querySelector(".form").style.display = "none";
    document.querySelector(".results").style.display = "block";
}
// turn off the results and display the original form
const goBack = () => {
    document.querySelector(".form").style.display = "block";
    document.querySelector(".results").style.display = "none";
    document.querySelector(".cost").value = "";
}

//  WILL RETURN IF I CAN FIND A GOOD SALES TAX API
// go to simple tip calculator
// const simple = () => {
//     document.querySelector(".advanced").style.display = "none";
//     document.querySelector(".simple").style.display = "block";
// }
// go to advanced tip calculator
// const advanced = () => {
//     document.querySelector(".simple").style.display = "none";
//     document.querySelector(".advanced").style.display = "block";
// }