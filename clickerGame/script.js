let money = 0
let click = 1
let upgradeCost = 10
let income = 0
let timeA = 0
let multiplier = 1
let speed = 1
let mechPencilCost = 500
let backPackCost = 200
let mechPencil = false
let backPack = false
let clickPower = 1
let totalMoney = 0
let passPencil = 50
let passNotebook = 100
let passTextbook = 500
let passRuler = 250
let n = 0
let p = 0
let t = 0
let r = 0

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
        
        
    }
}

function upgradePencil(){
    if (money >= passPencil){
        money -= passPencil
        income += 0.1
        p +=1
        passPencil += 15 + 3 * p
    }
}

function upgradeNotebook(){
    if (money >= passNotebook){
        money -= passNotebook
        income += 1
        n +=1
        passNotebook += 15 + 5 * n
    }
}


function upgradeRuler(){
    if (money >= passRuler){
        money -= passRuler
        income += 3
        r +=1
        passTextbook += 50 + 7 * r
    }
}

function upgradeTextbook(){
    if (money >= passTextbook){
        money -= passTextbook
        income += 5
        n +=1
        passTextbook += 100 + 9 * n
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
    // document.getElementById("").innerText = (`Each X increases your kps by 1 \n You have ${n} X. \n ${}kp for the next X`);
    document.getElementById("pencilID").innerText = (`Each Pencil increases your kps by 0.1 \n You have ${p} Pencils. \n ${passPencil}kp for the next Pencil`);
    document.getElementById("noteID").innerText = (`Each Notebook increases your kps by 1 \n You have ${n} Notebooks. \n ${passNotebook}kp for the next Notebook`);
    document.getElementById("ruleID").innerText = (`Each Ruler increases your kps by 3 \n You have ${r} Rulers. \n ${passRuler}kp for the next Ruler`);
    document.getElementById("textbookID").innerText = (`Each Textbook increases your kps by 5 \n You have ${t} Textbooks. \n ${passTextbook}kp for the next Textbook`);
    document.getElementById("clickUp").innerText = (`Each upgrade increases your click value by 1 \n You have ${click} clicks. \n ${upgradeCost}kp for the next upgrade \n Your pages are worth ${click * multiplier * clickPower} kp each`);
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