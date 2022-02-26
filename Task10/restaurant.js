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
