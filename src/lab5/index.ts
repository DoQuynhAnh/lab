// taks 1
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
//taks 2
class Car {
  drive() {
    console.log("Diving...");
  }
}
class Truck {
  drive() {
    console.log("Diving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function Vehicle(vehicle: Vehicle) {
  const v1 = new Car();
  const v2 = new Truck();
  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }
}
//Bài 4
//Generic
function merge<T extends object, U extends object>(objA : T, objB:U){
    return Object.assign(objA, objB);

}
const mergeObj = merge({ name:'Max', hobbies: ['Sports'] },{ age:30 });
console.log(mergeObj);
// generic interface
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "got 1 value";
  } else if (element.length > 1) {
    descriptionText = "got" + element.length + " elements.";
  }
  return [element, descriptionText];
}
//generic class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}
const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();
