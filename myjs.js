
//1.
Undefined because the variable one is declared and initialized after is being consoled.log.
    It recognises variable one, but it has been declared later in the code.
    Uncaught reference error because variables two and  three are declared local in the functions and can't be used outside them.

//2.
globalThis:Window because is a global execution context that initializes to a global object(Window Object).
this inside:{myMethod:f} because
false because
true because

//3.
Undefined because local var text is initialized after console.log.

//4.
Sarah is 22 and lives in San Francisco because of the use of local const in the function, so no variable hoisting applies to const.
Const cand be redeclared.

//5.
 for (var triangle = "#"; triangle.length < 8; triangle += "#")
    console.log(triangle);

//6.
    const unique=arr=>arr.filter(i=>arr.indexOf(i)===arr.lastIndexOf(i));
console.log(unique(["e","4","f","a","a","b","25","b","34"]));

//7.
const numbers=[23,4,5,8,12,34];
const elements=numbers.filter(number=>number>10);
console.log(elements);

//8.
class Worker{
    constructor(identifier, workingHourRate){
        this.identifier=identifier;
        this.workingHourRate=workingHourRate;
    }
}
const worker1= new Worker("Secretary",8)
//console.log(worker1);
Worker.prototype.hours="8am to 16";
Worker.prototype.jobProperties="Paper work";
console.log(worker1);
const worker2=new Worker("Accountant", "6", "14 to 18","Finance");
console.log(worker2);

//9.
class Food{
    constructor(name, protein, carbs, fatProperties){
        this.name=name;
        this.protein=protein;
        this.carbs=carbs;
        this.fatProperties=fatProperties;
    }
}
const pizza= new Food("Diavola","Pepperoni","Dough","Mozzarella");
//console.log(pizza);
Food.prototype.cookingMethod="Baked";
console.log(pizza);
const risotto= new Food("Funghi Porcini","Mushrooms","Rice","Parmigiano","Stirring");
console.log(risotto);