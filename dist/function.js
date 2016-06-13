var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function FullName(first, last) {
    return first + " " + last;
}
function FullName2(first, middle, last) {
    if (middle === void 0) { middle = ""; }
    return first + " " + middle + " " + last;
}
function FullName3(first) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return first + " " + restOfName.join(" ");
}
console.log(FullName("talal"));
console.log(FullName2("talal", undefined, "tayyab"));
console.log(FullName3("talal"));
console.log(FullName3("talal", "tayyab", "naeem", "akhtar"));
// - this 
var someObj = (function () {
    function someObj() {
        this.values = ["one", "two", "three"];
    }
    someObj.prototype.getValuesFunction = function () {
        return function (index) {
            if (!this.values) {
                return "this points to global object: " + this;
            }
            return this.values[index];
        };
    };
    return someObj;
}());
var obj = new someObj();
var func = obj.getValuesFunction();
console.log(func(0));
var someObjThisFix = (function (_super) {
    __extends(someObjThisFix, _super);
    function someObjThisFix() {
        _super.apply(this, arguments);
    }
    someObjThisFix.prototype.getValuesFunction = function () {
        var _this = this;
        return function (index) {
            return "this points to the correct function: " + _this.values[index] + " " + _this;
        };
    };
    return someObjThisFix;
}(someObj));
var obj2 = new someObjThisFix();
var func2 = obj2.getValuesFunction();
console.log(func2(0));
// overloads
var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.Func1 = function (x) {
        if (typeof x == "string") {
            return "string " + x;
        }
        if (typeof x == 'number') {
            return "number " + x;
        }
        return 'other type ' + x;
    };
    return MyClass;
}());
var myclass = new MyClass();
console.log(myclass.Func1('talal'));
console.log(myclass.Func1(10));
