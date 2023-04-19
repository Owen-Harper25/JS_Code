let money = 0
let value = 1
let upgradeCost = 10
let income = 0
let incomeCost = 50
let t = 0
let multiplier = 50
let speed = 1
let mechPencilCost = 500
let backPackCost = 200
let mechPencil = false
let backPack = false
let clickPower = 1
let totalMoney = 0

function time(){
    requestAnimationFrame(time)
    money += multiplier * speed * income / 60
    totalMoney += multiplier * speed * income / 60
    document.getElementById("incomeD").innerText = ("You are making " + income * multiplier * speed + "kp per second");
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("multiCount").innerText = ("Current multiplyer: " + multiplier);
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");
}
time()

function onButtonClick(){
    money += value * multiplier * clickPower
    totalMoney += value * multiplier * clickPower
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");

}

function upgradeMoney(){
    if (money >= upgradeCost){
        money -= upgradeCost
        value += 1
        upgradeCost += 5
        document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed()+ "kp");
        document.getElementById("upgrades").innerText = ("Next upgrade price: $" + upgradeCost);
        document.getElementById("pageValue").innerText = ("Your pages are worth: " + value * multiplier * clickPower + "kp each");
        
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
        document.getElementById("pageValue").innerText = ("Your pages are worth: " + value * multiplier * clickPower + "kp each");
        document.getElementById("bagA").style.display="none";
        document.getElementById("bagB").style.display="none";
    }
}

function toggleActive(el) {
    el.classList.toggle('active');
  }
  
  