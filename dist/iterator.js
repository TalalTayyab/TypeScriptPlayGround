// diff between for of and for in
var numbers = [1, 2, 3, 4];
console.log('for .. of');
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    console.log(number);
}
console.log('for .. in');
for (var number in numbers) {
    console.log(number);
}
var someArray = [1, "string", false, { name: "talal" }];
console.log('for .. of');
for (var _a = 0, someArray_1 = someArray; _a < someArray_1.length; _a++) {
    var item = someArray_1[_a];
    console.log("Type = " + typeof (item) + " , Value = " + item);
}
console.log('for .. in');
for (var item in someArray) {
    console.log("Type = " + typeof (item) + " , Value = " + item);
}
