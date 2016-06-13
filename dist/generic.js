function EchoNonGeneric(arg) {
}
function Echo(arg) {
    return arg;
}
console.log(Echo("hello"));
console.log(Echo(true));
console.log(Echo(123));
var myEchoFunc = Echo;
;
function MethodA(func) {
    console.log(func("inside Method A"));
}
function MethodB(func) {
    console.log(func.someMethod());
    console.log(func.someGenericMethod("hello"));
}
var obj = {
    someMethod: function () { return "someMethod"; },
    someGenericMethod: function (arg) { return arg; }
};
MethodA(myEchoFunc);
MethodB(obj);
function GenericWithLength(arg) {
    console.log("Length = " + arg.length + ", value = " + arg);
}
GenericWithLength("hell");
GenericWithLength([1, 2, 3]);
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.SayMyName = function () {
        return this.name;
    };
    return Person;
}());
;
var Factory = (function () {
    function Factory() {
    }
    Factory.Create = function (arg, name) {
        return new arg(name);
    };
    return Factory;
}());
var talal = Factory.Create(Person, "talal");
var snow = Factory.Create(Person, "Snow");
console.log(talal.SayMyName());
console.log(snow.SayMyName());
