let money = 1000000
let income = 0
let timeA = 0
let multiplier = 1
let speed = 1
let clickPower = 1
let totalMoney = 0
let passPencil = 50
let click = 1
let c = 0
let a = 0
let grade = 0

const supplies = {

    pencil: {
        cost: 50,
        value: 0.1,
        number: 0,
        costIncrease: 15,
    },

    notebook: {
        cost: 100,
        value: 1,
        number: 0,
        costIncrease: 50,
    },

    ruler: {
        cost: 250,
        value: 3,
        number: 0,
        costIncrease: 150,
    },

    textbook: {
        cost: 500,
        value: 5,
        number: 0,
        costIncrease: 500,
    },

    teacher: {
        cost: 1000,
        value: 10,
        number: 0,
        costIncrease: 1000,
    },
}

const upgrades = {
    pencilCase: {
        cost: 200,
        effect: () => {clickPower += 1},
        avalible: false,
        bought: false,
        icon: '👝',
        condition: () => {return c >= 50},
        description: "Doubles your clicking power",
        title: "Pencil Case",
    },
    
    mechA: {
        cost: 500,
        effect: () => {supplies.pencil.value *= 2},
        avalible: false,
        bought: false,
        icon: '🖊️',
        condition: () => {return supplies.pencil.number >= 5},
        description: "Doubles your pencil power",
        title: "Mechanical Pencil",
    },

    Nbook: {
        cost: 1000,
        effect: () => {supplies.notebook.value *= 2},
        avalible: false,
        bought: false,
        icon: '📒',
        condition: () => {return supplies.notebook.number >= 5},
        description: "Doubles your notebook power",
        title: "Hard Cover",
    },

    TRuler: {
        cost: 2000,
        effect: () => {supplies.ruler.value *= 2},
        avalible: false,
        bought: false,
        condition: () => {return supplies.ruler.number >= 5},
        icon: '📐',
        description: "Doubles your ruler power",
        title: "Traingle Set",
    },

    Tbook: {
        cost: 5000,
        effect: () => {supplies.textbook.value *= 2},
        avalible: false,
        bought: false,
        condition: () => {return supplies.textbook.number >= 5},
        icon: '📖',
        description: "Doubles your textbook power",
        title: "More Pages",
    },

    bag: {
        cost: 10000,
        effect: () => {clickPower += 1},
        avalible: false,
        bought: false,
        icon: '🎒',
        condition: () => {return c >= 250},
        description: "Doubles your clicking power",
        title: "Backpack",
    },
    
    apple: {
        cost: 10000,
        effect: () => {clickPower += 1},
        avalible: false,
        bought: false,
        icon: '🍎',
        condition: () => {return supplies.teacher.number >= 5},
        description: "Doubles your teacher's power",
        title: "Teacher's Apple",
    },

}
function pageAni(){
    document.getElementById('pageAni').src = (`images/Textbook/l0_sprite_binder${Math.floor(a) % 67 + 1}.png`)
    update()
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
        update()
    }
}

function initUpgrades() {

    for (const upgradeName in upgrades) {
        const element = document.getElementById(upgradeName)
        element.addEventListener('click', () => { upgrade(upgradeName) })
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
    // console.log(a)
    for (const supplyName in supplies) {
        const supply = supplies[supplyName]
        document.getElementById(supplyName + 'Tooltip').innerText = (`Each ${supplyName} increases your kps by ${supply.value} \n You have ${supply.number} ${supplyName} making ` + (supply.number * supply.value).toFixed(1) + `kp per second.`);
        document.getElementById(supplyName + 'CostText').innerText = (`${supply.cost}`);
        document.getElementById(supplyName + 'Amount').innerText = (`${supply.number}`);
    }

    for (const upgradeName in upgrades){
        const upgrade = upgrades[upgradeName]
        document.getElementById(upgradeName + 'Text').innerText = (`${upgrade.title}: ${upgrade.description} \n ${upgrade.cost}`);

        if (upgrade.condition() == true){
            document.getElementById(upgradeName + 'Display').innerText = (upgrade.icon)
        }
    }
}

function onButtonClick(){
    money += multiplier * clickPower
    totalMoney += multiplier * clickPower
    c += 1
    a += 1
    pageAni()
    update()
}



function time(){
    requestAnimationFrame(time)

    let localIncome = 0


    for (const supplyName in supplies) {
        const supply = supplies[supplyName]
        localIncome += supply.value * supply.number
        a += (supply.value * supply.number) / 60
        pageAni()
       

        if (money >= supply.cost){
                document.getElementById(supplyName + 'CostText').classList = ('affordable')
        }

        else {
            document.getElementById(supplyName + 'CostText').classList = ('notAffordable')
        }
    }

    // for (const upgradeName in upgrades) {
    //     const upgrade = upgrades[upgradeName]

    //     if (money >= upgrade.cost){
    //         document.getElementById(upgradeName + 'CostText').classList = ('affordable')
    //     }

    //     else{
    //         document.getElementById(upgradeName + 'CostText').classList = ('notAffordable')
    //     }
    // }
    console.log(grade)
    localIncome = localIncome.toFixed(1)
    money += multiplier * speed * localIncome / 60
    totalMoney += multiplier * speed * localIncome / 60
    document.getElementById("incomeD").innerText = ("You are making " + localIncome * multiplier * speed + "kp per second");
    document.getElementById("moneyCounter").innerText = ("Current knowledge: " + money.toFixed() + "kp");
    document.getElementById("moneyTotal").innerText = ("Total knowledge: " + totalMoney.toFixed() + "kp");
    document.getElementById("multiCount").innerText = ("Current multiplyer: " + multiplier);
    document.getElementById("grade").innerText = (`You are in grade ${grade}`)
    getGrade()

}

function getGrade(){
     
    if (totalMoney >= 9){ //5000
        grade = 10
        document.getElementById("classes").classList = ('bgImage gradeTen')
    }

    else if (totalMoney >= 8){ //5000
        grade = 9
        document.getElementById("classes").classList = ('bgImage gradeNine')
    }

    else if (totalMoney >= 7){ //5000
        grade = 8
        document.getElementById("classes").classList = ('bgImage gradeEight')
    }
    
    else if (totalMoney >= 6){ //5000
        grade = 7
        document.getElementById("classes").classList = ('bgImage gradeSeven')
    }
    else if (totalMoney >= 5){ //15000
        grade = 6
        document.getElementById("classes").classList = ('bgImage gradeSix')
    }
    else if (totalMoney >= 4){ //12000
        grade = 5
        document.getElementById("classes").classList = ('bgImage gradeFive')
    }
    else if (totalMoney >= 3){ //5000
        grade = 4
        document.getElementById("classes").classList = ('bgImage gradeFour')
    }
    
    else if (totalMoney >= 2){ //1000
        grade = 3
        document.getElementById("classes").classList = ('bgImage gradeThree')
    }

    else if (totalMoney >= 1){ //250
        grade = 2
        document.getElementById("classes").classList = ('bgImage gradeTwo')
    }

    else if (totalMoney >= 0){
        grade = 1
        document.getElementById("classes").classList = ('bgImage gradeOne')
    }
}


getGrade()
initSupplies()
initUpgrades()
update()
time()