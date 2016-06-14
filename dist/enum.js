var Source;
(function (Source) {
    Source[Source["Code"] = 0] = "Code";
    Source[Source["Internal"] = 1] = "Internal";
    Source[Source["External"] = 2] = "External";
    Source[Source["User"] = 3] = "User";
})(Source || (Source = {}));
;
var src;
src = Source.External;
console.log(src);
console.log(Source[src]);
;
var DynamicEnumExample;
(function (DynamicEnumExample) {
    DynamicEnumExample[DynamicEnumExample["A"] = "a".length] = "A";
})(DynamicEnumExample || (DynamicEnumExample = {}));
;
function someFunction(someVar) {
    if (typeof someVar == "string") {
        return "string : " + someVar;
    }
    return someVar;
}
console.log(someFunction(0 /* Hot */));
console.log(someFunction(123));
console.log(someFunction("talal"));
