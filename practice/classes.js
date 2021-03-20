// old way: constructor functions
function Car(name, numCylinders, manufacturer) {
  this.name = name;
  this.numCylinders = numCylinders;
  this.manufacturer = manufacturer;
}

const myCar = new Car('Elantra', 4, 'Hyundai');
console.log(myCar);

// new ways: classes

class Car1 {
  constructor(name, numCylinders, manufacturer) {
    this.name = name;
    this.numCylinders = numCylinders;
    this.manufacturer = manufacturer;
  }

  goVroom = () => console.log(`${this.name} goes vroom!`);
}

const myCar1 = new Car1('Elantra', 4, 'Hyundai');
console.log(myCar1);
myCar1.goVroom();

// -------------------------------------------------------
class Convertible extends Car {
  constructor(name, numCylinders, manufacturer, topDown) {
    super(name, numCylinders, manufacturer);
    this.topDown = topDown;
  }

  toggleTop = () => this.topDown = !this.topDown;
}

const myConvertible = new Convertible('Corvett', 8, 'Chevy', true);
console.log(myConvertible);
console.log(myConvertible.toggleTop());
console.log(myConvertible.toggleTop());