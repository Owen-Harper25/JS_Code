let money = 100000000
let income = 0
let timeA = 0
let multiplier = 1
let speed = 1
let clickPower = 1
let totalMoney = 0
let passPencil = 50
let click = 1
// let upgradeCost = 10
let c = 0

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
    },

    teacher: {
        cost: 1000,
        value: 10,
        number: 0,
        costIncrease: 1000,
        unboxed: false
    },
}

const upgrades = {
    bag: {
        cost: 200,
        effect: () => {clickPower += 1},
        avalible: false,
        bought: false,
        icon: '🎒',
        condition: () => {return c >= 50},
    },

    mechA: {
        cost: 500,
        effect: () => {supplies.pencil.value *= 2},
        avalible: false,
        bought: false,
        icon: '🖊️',
        condition: () => {return supplies.pencil.unboxed},
    },

    Nbook: {
        cost: 1000,
        effect: () => {supplies.notebook.value *= 2},
        avalible: false,
        bought: false,
        icon: '📒',
        condition: () => {return supplies.notebook.unboxed},
    },

    Ruler: {
        cost: 2000,
        effect: () => {supplies.ruler.value *= 2},
        avalible: false,
        bought: false,
        condition: () => {return supplies.ruler.unboxed},
        icon: '📐'
    },

    Tbook: {
        cost: 5000,
        effect: () => {supplies.textbook.value *= 2},
        avalible: false,
        bought: false,
        condition: () => {return supplies.textbook.unboxed},
        icon: '📖'
    }
}

function initSupplies() {

    for (const supplyName in supplies){

        const element = document.getElementById(supplyName)
    
        element.addEventListener('click', () => { buySupply(supplyName) })
    }
}

function buySupply(supplyName) {

    const supply = supplies[supplyName]

    if (money >= supply.cost) {
        money -= supply.cost
        supply.number += 1
        supply.cost += supply.costIncrease
            
        if (supply.number >= 5){
            supply.unboxed = true
            // console.log("Unboxed")  
        }
        update()
    }
}

function initUpgrades() {

    for (const upgradeName in upgrades) {
        const element = document.getElementById(upgradeName)
        element.addEventListener('click', () => { upgrade(upgradeName) })
        console.log(upgrades.mechA.condition())
    }
}

function upgrade(upgradeName) {

    const upgrade = upgrades[upgradeName]

    if (money >= upgrade.cost && upgrade.bought == false && upgrade.condition() == true){
        upgrade.bought = true
        money -= upgrade.cost
        upgrade.effect()
        document.getElementById(upgradeName).style.display="none";
        update()
    }
}
 
function update(){

    for (const supplyName in supplies) {
        const supply = supplies[supplyName]
        document.getElementById(supplyName + 'Tooltip').innerText = (`Each ${supplyName} increases your kps by ${supply.value} \n You have ${supply.number} ${supplyName} making ` + (supply.number * supply.value).toFixed(1) + `kp per second.`);
        document.getElementById(supplyName + 'CostText').innerText = (`${supply.cost}`);
        document.getElementById(supplyName + 'Amount').innerText = (`${supply.number}`);
    }

    for (const upgradeName in upgrades){
        const upgrade = upgrades[upgradeName]
        if (upgrade.condition() == true){
            document.getElementById(upgradeName + 'Display').innerText = (upgrade.icon)
        }
    }
}

function onButtonClick(){
    money += multiplier * clickPower
    totalMoney += multiplier * clickPower
    c += 1
    update()
}

function time(){
    requestAnimationFrame(time)

    let localIncome = 0

    for (const supplyName in supplies) {
        const supply = supplies[supplyName]
        localIncome += supply.value * supply.number
        console.log(localIncome)
    }

    localIncome = round(localIncome, 2)
    
    money += multiplier * speed * localIncome / 60
    totalMoney += multiplier * speed * localIncome / 60
    // income += supplies.pencil.value * supplies.pencil.number + supplies.notebook.value * supplies.notebook.number + supplies.ruler.value * supplies.ruler.number + supplies.textbook.value * supplies.textbook.number + supplies.teacher.value * supplies.teacher.number
    document.getElementById("incomeD").innerText = ("You are making " + localIncome * multiplier * speed + "kp per second");
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");
    document.getElementById("multiCount").innerText = ("Current multiplyer: " + multiplier);

}

initSupplies()
initUpgrades()
update()
time()