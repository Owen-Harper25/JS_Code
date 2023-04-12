let money = 0
let value = 1
let upgradeCost = 10
let income = 1
let incomeCost = 2
let i = 0

// while (i !== -1) {
//     i += 1
//     var now = new Date();
//     var ticks = now.getTime();
    // console.log(ticks);
// }

function onButtonClick(){
    money += value + income
    // console.log(money)
    document.getElementById("moneyCounter").innerText = ("Current Balance: $" + money);
}

function upgradeMoney(){
    if (money >= upgradeCost){
        money -= upgradeCost
        value += 1
        upgradeCost += 5
        document.getElementById("moneyCounter").innerText = ("Current Balance: $" + money);
        document.getElementById("upgrades").innerText = ("Next upgrade price: $" + upgradeCost);
        document.getElementById("clickValue").innerText = ("Your clicks are worth: $" + value);
    }
}

function passIncome(){
    if (money >= incomeCost)
        money -= incomeCost
        income += 1
        incomeCost += 1
        document.getElementById("incomePrice").innerText = ("Next bot upgrade is $" + incomeCost);
        console.log(income)
        console.log(incomeCost)
}

function incomeAdd(){
    if (ticks += 60)
        money += income
        document.getElementById("income").innerText = ("Your are making $" + income + " per second");
}