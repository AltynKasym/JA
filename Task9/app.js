function Auto(model, year, color, volume) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.volume = volume;
}

Auto.prototype.showInfo = function () {
  return `${this.model}, ${this.year}, ${this.color}, ${this.volume}`;
};

Auto.prototype.drive = function () {
  if (this.volume > 0) return (this.volume -= 10);
  else {
    return "Volume empty";
  }
};

const tesla = new Auto("Tesla Model X", 2020, "black", 150);
const mers = new Auto("Mersedes S", 2020, "darkblue", 80);

console.log(tesla);
console.log(mers);

console.log(tesla.showInfo());
console.log(tesla.drive());
console.log(tesla.showInfo());
console.log(tesla.drive());
console.log(tesla.showInfo());
console.log(mers.drive());
console.log(mers.drive());
console.log(mers.drive());
console.log(mers.drive());
console.log(mers.drive());
console.log(mers.drive());
console.log(mers.drive());
console.log(mers.drive());

console.log(mers.showInfo());
