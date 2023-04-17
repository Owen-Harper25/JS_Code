let money = 0
let value = 1
let upgradeCost = 10
let income = 0
let incomeCost = 50
let t = 0
let Bg = true
let multiplier = 2


function time(){
    requestAnimationFrame(time)
    money += multiplier * income / 60
    document.getElementById("incomeD").innerText = ("Your bots are making $" + income * multiplier + " per second");
    document.getElementById("moneyCounter").innerText = ("Current Balance: $" + money.toFixed());
    document.getElementById("multiCount").innerText = ("Current Multiplyer: " + multiplier);
}
time()

function onButtonClick(){
    money += value * multiplier
    document.getElementById("moneyCounter").innerText = ("Current Balance: $" + money.toFixed());
}

function upgradeMoney(){
    if (money >= upgradeCost){
        money -= upgradeCost
        value += 1
        upgradeCost += 5
        document.getElementById("moneyCounter").innerText = ("Current Balance: $" + money);
        document.getElementById("upgrades").innerText = ("Next upgrade price: $" + upgradeCost);
        document.getElementById("clickValue").innerText = ("Your clicks are worth: $" + value * multiplier);
        
    }
}

function passIncome(){
    if (money >= incomeCost){
        money -= incomeCost
        income += 1
        incomeCost += 50
        document.getElementById("incomePrice").innerText = ("Next bot upgrade is $" + incomeCost);
    }
}

function onMultiClick(){
    if (money >= incomeCost){
        money -= incomeCost
        multiplier += 1
        console.log(multiplier)
    }
}