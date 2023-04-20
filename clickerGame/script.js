let money = 0
let click = 1
let upgradeCost = 10
let income = 0
let passPencil = 50
let passNotebook = 100
let passTextbook = 250
let timeA = 0
let multiplier = 1
let speed = 1
let mechPencilCost = 500
let backPackCost = 200
let mechPencil = false
let backPack = false
let clickPower = 1
let totalMoney = 0
let n = 0
let p = 0
let t = 0


function onButtonClick(){
    money += click * multiplier * clickPower
    totalMoney += click * multiplier * clickPower
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");

}

function upgradeClick(){
    if (money >= upgradeCost){
        money -= upgradeCost
        click += 1
        upgradeCost += 5
        document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed()+ "kp");
        document.getElementById("upgrades").innerText = ("Next upgrade price: $" + upgradeCost);
        document.getElementById("pageValue").innerText = ("Your pages are worth: " + click * multiplier * clickPower + "kp each");
        
    }
}

function upgradePencil(){
    if (money >= passPencil){
        money -= passPencil
        income += 0.1
        p +=1
        passPencil += 15 + 3 * p
        document.getElementById("incomePrice").innerText = ("Next pencil is " + passPencil + "kp");
    }
}

function upgradeNotebook(){
    if (money >= passNotebook){
        money -= passNotebook
        income += 1
        n +=1
        passNotebook += 15 + 5 * n
        document.getElementById("incomePrice").innerText = ("Next pencil is " + passNotebook + "kp");
    }
}

function upgradeTextbook(){
    if (money >= passTextbook){
        money -= passTextbook
        income += 1
        n +=1
        passTextbook += 15 + 5 * n
        document.getElementById("incomePrice").innerText = ("Next pencil is " + incomeCost + "kp");
    }
}


function time(){
    requestAnimationFrame(time)
    money += multiplier * speed * income / 60
    totalMoney += multiplier * speed * income / 60
    document.getElementById("incomeD").innerText = ("You are making " + (income * multiplier * speed).toFixed(1) + "kp per second");
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("multiCount").innerText = ("Current multiplyer: " + multiplier);
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");
}
time()


function onMechUpgrade(){
    if (money >= mechPencilCost && mechPencil === false){
        mechPencil = true
        money -= mechPencilCost
        speed += 1
        document.getElementById("incomeD").innerText = ("You are making " + income * multiplier * speed + "kp per second");
        document.getElementById("mechA").style.display="none";
        document.getElementById("mechB").style.display="none";
    }
}

function onBagUpgrade(){
    if (money >= backPackCost && backPack === false){
        backPack = true
        money -= backPackCost
        clickPower += 1
        document.getElementById("pageValue").innerText = ("Your pages are worth: " + click * multiplier * clickPower + "kp each");
        document.getElementById("bagA").style.display="none";
        document.getElementById("bagB").style.display="none";
    }
}