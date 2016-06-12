var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Machine = (function () {
    function Machine(user) {
        this.user = user;
    }
    Object.defineProperty(Machine.prototype, "User", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    Machine.prototype.Hello = function () {
        return Machine.GreetMsg + " " + this.user;
    };
    Machine.GreetMsg = "Hello";
    return Machine;
}());
var Computer = (function (_super) {
    __extends(Computer, _super);
    function Computer(user) {
        _super.call(this, user);
    }
    Computer.prototype.Add = function (x, y) {
        return x + y;
    };
    return Computer;
}(Machine));
var AI = (function (_super) {
    __extends(AI, _super);
    function AI(user) {
        _super.call(this, user);
    }
    AI.prototype.Hello = function () {
        return "Invalid ## I am a AI - I have no user.";
    };
    return AI;
}(Computer));
var machine = new Machine("user 1");
console.log(machine.Hello());
var computer = new Computer("user 2");
console.log(computer.Hello());
console.log(computer.Add(1, 2));
var ai = new AI("user 3");
console.log(ai.Hello());
console.log(ai.User);
