let money = 0
let click = 1
let upgradeCost = 10
let income = 0
let timeA = 0
let multiplier = 50
let speed = 1
let backPackCost = 200
let mechPencilCost = 500
let exRulerCost = 1000
let hNotebookCost = 2000
let bigTextbookCost = 5000
let mechPencil = false
let backPack = false
let hNotebook = false
let bigTextbook = false
let exRuler = false
let clickPower = 1
let totalMoney = 0
let passPencil = 50
let passNotebook = 100
let passTextbook = 500
let passRuler = 250
let pencilValue = 0.1
let notebookValue = 1
let rulerValue = 3
let textbookValue = 5
let n = 0
let p = 0
let t = 0
let r = 0
let c = 0
let totalPencilIncome = pencilValue * p
let bagB = false
let pencilB = false
let rulerB = false
let notebookB = false
let textbookB = false

function onButtonClick(){
    money += click * multiplier * clickPower
    totalMoney += click * multiplier * clickPower
}

function upgradeClick(){
    if (money >= upgradeCost){
        money -= upgradeCost
        click += 1
        c += 1
        upgradeCost += 10 + 2 * c
    }
}

function upgradePencil(){
    if (money >= passPencil){
        money -= passPencil
        income += pencilValue
        p +=1
        passPencil += 15 + 3 * p
    }
}

function upgradeNotebook(){
    if (money >= passNotebook){
        money -= passNotebook
        income += notebookValue
        n +=1
        passNotebook += 15 + 5 * n
    }
}

function upgradeRuler(){
    if (money >= passRuler){
        money -= passRuler
        income += rulerValue
        r +=1
        passRuler += 50 + 7 * r
    }
}

function upgradeTextbook(){
    if (money >= passTextbook){
        money -= passTextbook
        income += textbookValue
        t +=1
        passTextbook += 100 + 9 * t
    }
}
function time(){
    requestAnimationFrame(time)
    money += multiplier * speed * income / 60
    totalMoney += multiplier * speed * income / 60
    document.getElementById("incomeD").innerText = ("You are making " + (income * multiplier * speed).toFixed(1) + "kp per second");
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");
    document.getElementById("multiCount").innerText = ("Current multiplyer: " + multiplier);
    document.getElementById("pencilID").innerText = (`Each Pencil increases your kps by ${pencilValue} \n You have ${p} Pencils making ` + (pencilValue * p).toFixed(1) + "kp per second.");
    document.getElementById("noteID").innerText = (`Each Notebook increases your kps by ${notebookValue} \n You have ${n} Notebooks making ${notebookValue * n}kp per second`);
    document.getElementById("ruleID").innerText = (`Each Ruler increases your kps by ${rulerValue} \n You have ${r} Rulers making ${rulerValue * r}kp per second`);
    document.getElementById("textbookID").innerText = (`Each Textbook increases your kps by ${textbookValue} \n You have ${t} Textbooks making ${textbookValue * t}kp per second`);
    document.getElementById("clickUp").innerText = (`Each upgrade increases your click value by ${clickPower} \n You have ${click} clicks. \n ${upgradeCost}kp for the next upgrade \n Your pages are worth ${click * multiplier * clickPower} kp each`);
    
    
    document.getElementById("pencilCostText").innerText = (`${passPencil}`);
    document.getElementById("pencilNum").innerText = (`${p}`);
    document.getElementById("notebookCostText").innerText = (`${passNotebook}`);
    document.getElementById("notebookNum").innerText = (`${n}`);
    document.getElementById("rulerCostText").innerText = (`${passRuler}`);
    document.getElementById("rulerNum").innerText = (`${r}`);
    document.getElementById("textbookCostText").innerText = (`${passTextbook}`);
    document.getElementById("textbookNum").innerText = (`${t}`);
    document.getElementById("clickCostText").innerText = (`${upgradeCost}`);
    document.getElementById("clickNum").innerText = (`${c}`);

    if (c >= 5){
        bagB = true
        document.getElementById("bagDisplay").innerText = ("🎒")
    }

    if (p >= 5){
        pencilB = true
        document.getElementById("pencilDisplay").innerText = ("🖊️")
    }

    if (n >= 5){
        notebookB = true
        document.getElementById("notebookDisplay").innerText = ("📒")
    }

    if (r >= 5){
        rulerB = true
        document.getElementById("rulerDisplay").innerText = ("📐")
    }

    if (t >= 5){
        textbookB = true
        document.getElementById("textbookDisplay").innerText = ("📖")
    }
}
time()

function onBagUpgrade(){
    if (money >= backPackCost && backPack === false && bagB === true){
        backPack = true
        money -= backPackCost
        clickPower += 1
        document.getElementById("bagA").style.display="none";
        document.getElementById("bagDisplay").style.display="none";
    }
}

function onMechUpgrade(){
    if (money >= mechPencilCost && mechPencil === false){
        mechPencil = true
        money -= mechPencilCost
        pencilValue *= 2
        document.getElementById("mechA").style.display="none";
    }
}

function onNotebookUpgrade(){
    if (money >= hNotebookCost && hNotebook === false){
        hNotebook = true
        money -= hNotebookCost
        notebookValue *= 2
        document.getElementById("Nbook").style.display="none";
    }
}

function onTextbookUpgrade(){
    if (money >= bigTextbookCost && bigTextbook === false){
        bigTextbook = true
        money -= bigTextbookCost
        textbookValue *= 2
        document.getElementById("Tbook").style.display="none";
    }
}

function onRulerUpgrade(){
    if (money >= exRulerCost && exRuler === false){
        exRuler = true
        money -= exRulerCost
        rulerValue *= 2
        document.getElementById("Ruler").style.display="none";
    }
}