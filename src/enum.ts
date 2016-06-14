enum Source {Code = 0, Internal = 1, External = 2, User =3};

let src : Source;

src = Source.External;

console.log(src);
console.log(Source[src]);

const enum Weather {Hot =0 , Cold=1};

enum DynamicEnumExample { A = "a".length };

function someFunction(someVar : string | number | Source | Weather) : string|number {
 if (typeof someVar == "string"){
     return "string : " + someVar;        
 }

  
 return someVar;

}
 
console.log(someFunction(Weather.Hot));
console.log(someFunction(Source.Internal));
console.log(someFunction(123));
console.log(someFunction("talal")); 