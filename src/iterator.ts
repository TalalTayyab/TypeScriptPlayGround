// diff between for of and for in
let numbers = [1,2,3,4];

console.log('for .. of');
for (let number of numbers){
    console.log(number);
} 

console.log('for .. in');
for (let number in numbers) {
    console.log(number);
}

let someArray = [1,"string", false, {name: "talal"}];

console.log('for .. of');
for (let item of someArray){
    console.log(`Type = ${typeof(item)} , Value = ${item}`)
}

console.log('for .. in');
for (let item in someArray){
    console.log(`Type = ${typeof(item)} , Value = ${item}`)
}

