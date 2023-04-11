let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = true
let age = 18
let time = ''

if (regEarly === true && age > 18) {
  raceNumber += 1000
}
if (regEarly === true && age > 18) {
  time = '9:30'
  console.log(`You will run at ${time}, number ${raceNumber}.`)
}
else if (regEarly === false && age > 18) {
  time = '11:00'
  console.log(`You will run at ${time}, number ${raceNumber}.`)
}
else if (age < 18) {
  time = '12:30'
  console.log(`You will run at ${time}, number ${raceNumber}.`) 
}
else {
  console.log('Go to the regestration desk')
}

