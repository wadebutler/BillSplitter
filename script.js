const getResults = () => {
    console.log("total meals tip " + mealTip());
    console.log("each person tips " + personalTip());
    console.log("cost of meal per person " + personalCost());
    console.log("each person pays " + individualTotal() + " total");
}

const mealTip = () => {
    
    const tipPercent = document.querySelector(".tip").value / 100;
    const cost = document.querySelector(".cost").value;

    const totalTip = cost * tipPercent;
    return totalTip.toFixed(2);
}

const personalTip = () => {
    const cost = document.querySelector(".cost").value;
    const people = document.querySelector(".people").value;
    const tipPercent = document.querySelector(".tip").value / 100;

    const totalTip = cost * tipPercent;
    const dividedTip = totalTip / people;

    return dividedTip.toFixed(2);
}

const personalCost = () => {
    const cost = document.querySelector(".cost").value;
    const people = document.querySelector(".people").value;

    const dividedCost = cost / people;

    return dividedCost.toFixed(2);
}

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