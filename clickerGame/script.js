let money = 0
let value = 1
let upgradeCost = 10
let income = 0
let incomeCost = 50
let t = 0
let Bg = true
let multiplier = 1
let speed = 1
let mechPencilCost = 500
let mechPencil = false
let backPackCost = 200
let backPack = false

function time(){
    requestAnimationFrame(time)
    money += multiplier * speed * income / 60
    document.getElementById("incomeD").innerText = ("Your bots are making " + income * multiplier * speed + "kp per second");
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed()+ "kp");
    document.getElementById("multiCount").innerText = ("Current knowledge multiplyer: " + multiplier);
}
time()

function onButtonClick(){
    money += value * multiplier
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed()+ "kp");
}

function upgradeMoney(){
    if (money >= upgradeCost){
        money -= upgradeCost
        value += 1
        upgradeCost += 5
        document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed()+ "kp");
        document.getElementById("upgrades").innerText = ("Next upgrade price: $" + upgradeCost);
        document.getElementById("clickValue").innerText = ("Your pages are worth: " + value * multiplier + "kp each");
        
    }
}

function passIncome(){
    if (money >= incomeCost){
        money -= incomeCost
        income += 1
        incomeCost += 50
        document.getElementById("incomePrice").innerText = ("Next pencil is " + incomeCost + "kp");
    }
}

function onMechUpgrade(){
    if (money >= mechPencilCost && mechPencil === false){
        mechPencil = true
        money -= mechPencilCost
        speed += 1
        document.getElementById("mechPencil").innerText = ("You have bought this upgrade");
    }
}

function onBagUpgrade(){
    if (money >= backPackCost && backPack === false){
        mechPencil = true
        money -= backPackCost
        speed += 1
        document.getElementById("backPack").innerText = ("You have bought this upgrade");
    }
}
