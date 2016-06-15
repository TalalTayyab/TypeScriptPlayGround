function EchoNonGeneric(arg: any): any {

}

function Echo<T>(arg: T): T {
    return arg;
}

console.log(Echo<string>("hello"));
console.log(Echo<boolean>(true));
console.log(Echo(123));

let myEchoFunc: <T>(arg: T) => T = Echo;

interface IGenericMethod {
    <T>(arg: T): T;
};

interface IGenericInterface<T> {
    someMethod(): string;
    someGenericMethod(arg: T): T;
}

function MethodA(func: IGenericMethod) {
    console.log(func("inside Method A"));
}

function MethodB(func: IGenericInterface<string>) {
    console.log(func.someMethod());
    console.log(func.someGenericMethod("hello"));
}


var obj1 = {
    someMethod: function () { return "someMethod"; },
    someGenericMethod: function (arg: string): string { return arg; }
};

MethodA(myEchoFunc);
MethodB(obj1);

interface ILength {
    length: number;
}

function GenericWithLength<T extends ILength>(arg: T) {
    console.log(`Length = ${arg.length}, value = ${arg}`);
}

GenericWithLength<string>("hell");
GenericWithLength<number[]>([1, 2, 3]);

class Person {
    constructor(protected name: string) {

    }

    SayMyName(): string {
        return this.name;
    }
};

class Factory {
    static Create<T>(arg: { new (name: string): T }, name: string): T {
        return new arg(name);
    }
}

var talal = Factory.Create(Person, "talal");
var snow = Factory.Create(Person, "Snow");

console.log(talal.SayMyName());
console.log(snow.SayMyName());