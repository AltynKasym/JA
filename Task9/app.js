class Restaurant {
  constructor(name, cuisineType) {
    this.name = name;
    this.cuisineType = cuisineType;
    this.served = 0;
  }
  showInfo() {
    return `Название ресторана: ${this.name}. Тип кухни: ${this.cuisineType}`;
  }
  status() {
    const time = new Date().getHours();
    if (time >= 9 && time <= 22) return " Ресторан открыт ";
    else return " Ресторан закрыт ";
  }

  serve() {
    return (this.served = this.served + 1);
  }

  setServed(amount) {
    return (this.served = this.served + amount);
  }

  showTotalServed() {
    return `Обслужено: ${this.served}`;
  }
}

const badobot = new Restaurant("Badobot", "Kyrgyz ");

badobot.serve();
badobot.setServed(15);
document.write(
  badobot.showInfo() +
    "<br>" +
    badobot.status() +
    "<br>" +
    badobot.showTotalServed() +
    "<br>" +
    "<br>"
);

class Auto {
  constructor(model, year, power, color) {
    this.model = model;
    this.year = year;
    this.power = power;
    this.color = color;
  }
  showInfo() {
    return `Модель авто: ${this.model}, год выпуска: ${this.year}, мощность двигателя: ${this.power}, цвет кузова: ${this.color}`;
  }
}

class EVAuto extends Auto {
  constructor(model, year, power, color, battery) {
    super(model, year, power, color);
    this.battery = battery;
  }
  showInfo() {
    return super.showInfo() + ", ёмкость батареи: " + this.battery;
  }

  promote() {
    return `Покупайте электромобили. Используйте солнце а не горючее.`;
  }
}

const mers = new Auto("Mers 600", 2020, "160hp", "black");
document.write(mers.showInfo() + "<br>");

const tesla = new EVAuto("Model X", 2021, "180hp", "gray", "140kv");
document.write(tesla.showInfo() + "<br>" + tesla.promote());
