function FullName(first: string, last?: string): string {
    return `${first} ${last}`;
}

function FullName2(first: string, middle: string = "", last?: string): string {
    return `${first} ${middle} ${last}`;
}

function FullName3(first: string, ...restOfName: string[]): string {
    return `${first} ${restOfName.join(" ")}`;
}

console.log(FullName("talal"));
console.log(FullName2("talal", undefined, "tayyab"));
console.log(FullName3("talal"));
console.log(FullName3("talal", "tayyab", "naeem", "akhtar"));


// - this 
class someObj {
    protected values: string[] = ["one", "two", "three"];

    getValuesFunction(): (x: number) => string {
        return function (index: number) {
            if (!this.values) {
                return "this points to global object: " + this;
            }
            return this.values[index];
        }
    }
}

let obj = new someObj();
let func = obj.getValuesFunction();
console.log(func(0));


class someObjThisFix extends someObj {
    getValuesFunction() : (x:number)=>string {
        return (index: number): string => {
            return "this points to the correct function: " + this.values[index] + " " + this;
        }
    }
}

let obj2 = new someObjThisFix();
let func2 = obj2.getValuesFunction();
console.log(func2(0));

// overloads

class MyClass {
    Func1(name: string) : string;
    Func1(age: number) : number;
    Func1(x : any) : any {
        if (typeof x == "string"){
            return `string ${x}`;
        }        
        
        if (typeof x == 'number'){
            return `number ${x}`;
        }
        
        return 'other type ' + x;
    }
}

var myclass = new MyClass();
console.log(myclass.Func1('talal'));
console.log(myclass.Func1(10));
