const bobsFollowers = ['Owen', 'Carson', 'Stryder', 'John']
const tinasFollowers = ['Abby', 'John', 'Stryder']
let mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log(bobsFollowers[i])
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log('Both accounts have the same followers: ' + mutualFollowers);