class Machine {
    
    private static GreetMsg : string = "Hello Dev Developer";
    
    constructor(protected user: string) {
    }
    
    get User() : string {
        return this.user;
    }
    
    Hello(): string {
        return `${Machine.GreetMsg} ${this.user}`;
    }
}

class Computer extends Machine {
    constructor(user: string) {
        super(user);
        
    }

    Add(x: number, y: number): number {
        return x + y;
    }
}

class AI extends Computer {
    constructor(user: string){
        super(user);
    }
    
    Hello() : string {
        return "Invalid ## I am a AI - I have no user.";
    }
    
}


let machine = new Machine("user 1");
console.log(machine.Hello());


let computer = new Computer("user 2");
console.log(computer.Hello());
console.log(computer.Add(1,2));

let ai = new AI("user 3");
console.log(ai.Hello());
console.log(ai.User);



