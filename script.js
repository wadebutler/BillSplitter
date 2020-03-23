// SIMPLE TIP CALCULATOR
const getResultsSimple = () => {
    personalTip();
    personalCost();
    individualTotal();
    results();
    handleDisplaySimple();
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

// ADVANCED TIP/TAX CALCULATOR
const getResultsAdvanced = () => {
    handleDisplayAdvanced();
    provinceTax();
    advTip();
    costWithTax();
    mealTotalAdvanced();
    advancedSplit();
    advResult();
}

const provinceTax = () => {
    const cost = document.querySelector(".aCost").value;
    const tax = document.querySelector(".aRegion").value;

    const mealTax = cost * tax;
    return mealTax;
}

const advTip = () => {
    const cost = document.querySelector(".aCost").value;
    const people = document.querySelector(".aPeople").value;
    const tipPercent = document.querySelector(".aTip").value / 100;

    const totalTip = cost * tipPercent;
    const dividedTip = totalTip / people;

    return dividedTip;
}

const costWithTax = () => {
    const cost = document.querySelector(".aCost").value;
    const tax = document.querySelector(".aRegion").value;

    const mealTax = cost * tax;
    const mealTotal = parseInt(cost) + parseInt(mealTax);
    return mealTotal;
}

const mealTotalAdvanced = () => {
    const cost = document.querySelector(".aCost").value;
    const tax = document.querySelector(".aRegion").value;
    const tipPercent = document.querySelector(".aTip").value / 100;

    const mealTax = cost * tax;
    const mealWithTax = parseInt(cost) + parseInt(mealTax);
    const totalTip = cost * tipPercent;
    const mealCost = mealWithTax + totalTip;
    return mealCost;
}

const advancedSplit = () => {
    const cost = document.querySelector(".aCost").value;
    const tax = document.querySelector(".aRegion").value;
    const tipPercent = document.querySelector(".aTip").value / 100;
    const people = document.querySelector(".aPeople").value;

    const mealTax = cost * tax;
    const mealWithTax = parseInt(cost) + parseInt(mealTax);
    const totalTip = cost * tipPercent;
    const mealCost = mealWithTax + totalTip;
    const split = mealCost / people
    return split;
}

const advResult = () => {
    document.querySelector(".mealTax").innerHTML = provinceTax();
    document.querySelector(".advTip").innerHTML = advTip();
    document.querySelector(".costTax").innerHTML = costWithTax();
    document.querySelector(".aTotal").innerHTML = mealTotalAdvanced();
    document.querySelector(".advancedSplit").innerHTML = advancedSplit();
}

//  SCREEN SWITCH CONTROLS
// SIMPLE
// turn off the SIMPLE form and display results
const handleDisplaySimple = () => {
    document.querySelector(".form").style.display = "none";
    document.querySelector(".results").style.display = "block";
}
// turn off the SIMPLE results and display the original form
const goBackSimple = () => {
    document.querySelector(".form").style.display = "block";
    document.querySelector(".results").style.display = "none";
    document.querySelector(".cost").value = "";
}
// ADVANCED
// turn off the ADVANCED form and display results
const handleDisplayAdvanced = () => {
    document.querySelector(".aForm").style.display = "none";
    document.querySelector(".aResults").style.display = "block";
}
// turn off the ADVANCED results and display the original form
const goBackAdvanced = () => {
    document.querySelector(".aForm").style.display = "block";
    document.querySelector(".aResults").style.display = "none";
    document.querySelector(".aCost").value = "";
}

// CALCULATOR SELECTOR CONTROLS
// go to simple tip calculator
const simple = () => {
    document.querySelector(".advanced").style.display = "none";
    document.querySelector(".simple").style.display = "block";
}
// go to advanced tip calculator
const advanced = () => {
    document.querySelector(".simple").style.display = "none";
    document.querySelector(".advanced").style.display = "block";
}