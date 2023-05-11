let money = 10000000000
let income = 0
let timeA = 0
let multiplier = 50
let speed = 1
let clickPower = 1
let totalMoney = 0
let passPencil = 50
let click = 1
let upgradeCost = 10
let c = 0


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

const supplies = {

    pencil: {
        cost: 50,
        value: 0.1,
        number: 0,
        costIncrease: 15,
        unboxed: false
    },

    notebook: {
        cost: 100,
        value: 1,
        number: 0,
        costIncrease: 50,
        unboxed: false
    },

    ruler: {
        cost: 250,
        value: 3,
        number: 0,
        costIncrease: 150,
        unboxed: false
    },

    textbook: {
        cost: 500,
        value: 5,
        number: 0,
        costIncrease: 500,
        unboxed: false
    }
}

initSupplies()

function initSupplies() {

    for (const supplyName in supplies){

        const element = document.getElementById(supplyName)
    
        element.addEventListener('click', () => { buySupply(supplyName) })
    }
}

function buySupply(supplyName) {

    const supply = supplies[supplyName]

    if (money >= supply.cost){
        money -= supply.cost
        supply.number += 1
        supply.cost += supply.costIncrease
        document.getElementById(supplyName + 'Tooltip').innerText = (`Each ${supplyName} increases your kps by ${supply.value} \n You have ${supply.number} ${supplyName} making ` + (supply.number * supply.value).toFixed(1) + `kp per second.`);
        document.getElementById(supplyName + 'CostText').innerText = (`${supply.cost}`);
        document.getElementById(supplyName + 'Amount').innerText = (`${supply.number}`);
        // console.log(supply.number >= 5)
       
        if (supply.number >= 5){
            supply.unboxed = true
            console.log("Unboxed")
            document.getElementById(supplyName + 'Display').innerText = (upgrades.icon)
        }
    }
}


function time(){
    requestAnimationFrame(time)
    money += multiplier * speed * income / 60
    totalMoney += multiplier * speed * income / 60
    income += supplies.pencil.value * supplies.pencil.number + supplies.notebook.value * supplies.notebook.number + supplies.ruler.value * supplies.ruler.number + supplies.textbook.value * supplies.textbook.number
    document.getElementById("incomeD").innerText = ("You are making " + (income * multiplier * speed).toFixed(1) + "kp per second");
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");
    document.getElementById("multiCount").innerText = ("Current multiplyer: " + multiplier);


    document.getElementById("clickCostText").innerText = (`${upgradeCost}`);
    document.getElementById("clickNum").innerText = (`${c}`);


    if (c >= 5){
        bagB = true
        document.getElementById("bagDisplay").innerText = ("🎒")
    }


    // if (p >= 5){
    //     pencilB = true
    //     document.getElementById("pencilDisplay").innerText = ("🖊️")
    // }

    // if (n >= 5){
    //     notebookB = true
    //     document.getElementById("notebookDisplay").innerText = ("📒")
    // }

    // if (r >= 5){
    //     rulerB = true
    //     document.getElementById("rulerDisplay").innerText = ("📐")
    // }

    // if (t >= 5){
    //     textbookB = true
    //     document.getElementById("textbookDisplay").innerText = ("📖")
    // }
}
time()

const upgrades = {
    bag: {
        cost: 200,
        effect: () => { clickPower += 1 },
        avalible: false,
        bought: false,
        icon: '🎒',

    },

    mechA: {
        cost: 500,
        effect: () => {supplies.pencil.value *= 2},
        avalible: false,
        bought: false,
        icon: '🖊️',
        condition: () => {supplies.pencil.unboxed == true},
        connection: 'pencil',
    },

    Nbook: {
        cost: 1000,
        effect: () => { notebookValue *= 2 },
        avalible: false,
        bought: false,
        icon: '📒',
        connection: 'notebook',
    },

    Ruler: {
        cost: 2000,
        effect: () => { rulerValue *= 2 },
        avalible: false,
        bought: false,
        icon: '📐'
    },

    Tbook: {
        cost: 5000,
        effect: () => { textbookValue *= 2 },
        avalible: false,
        bought: false,
        icon: '📖'
    }
}

initUpgrades()

function initUpgrades() {

    for (const upgradeName in upgrades) {

        const element = document.getElementById(upgradeName)
        element.addEventListener('click', () => { upgrade(upgradeName) })
        console.log(upgrades.mechA.condition)
        let name = upgradeTitle
    }
}

function upgrade(upgradeName) {

    const upgrade = upgrades[upgradeName]

    if (money >= upgrade.cost && upgrade.bought == false && upgrade.condition() == true){
        upgrade.bought = true
        money -= upgrade.cost
        upgrade.effect()
        document.getElementById(upgradeName).style.display="none";
        // console.log(supplies.pencil.number >= 5)
        console.log(upgrade.condition())
  
    }

    if (upgrade.condition == true){
        console.log("Upgrade Ready")
    }
}
