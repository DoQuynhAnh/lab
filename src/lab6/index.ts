//Bài 1 
function Logger1(contructor:Function){
    console.log ('logging...' );
    console.log (contructor);
}
@Logger1
class Person {
    name = 'Max';
    contructor(){
        console.log('Creating person object...');
    }
}
const pers = new Person();
console.log (pers);
//bài 2 
function Logger2(logString: string){
    return function(contructor: Function){
        console.log (logString);
        console.log(contructor);
    };
}
@Logger2('LOGGING - PERSON')
class Person {
    name='Max';
    contructor(){
        console.log('Creating person object ...');
    }
}


//Bài 3
function Log(target:any, propertyName: string | Symbol){
    console.log('property decorator!');
    console.log(target, propertyName);
}
class Product{
    @Log
    title: string;
    private _proce: number;
    set price(val: number){
        contructor(t: string, p:number){
            this.title = t;
            this.price = p;
        }
        getPriceWithTax(){}
    }
}