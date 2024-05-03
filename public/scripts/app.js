class App {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();
  }

  run = () => {
    this.clear();
    Car.list.forEach((car) => {
      let node = document.createElement("div");
      node.className = "col-4";
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    this.clear();
    let cars = [];
    cars = await Binar.listCars();
    let tipeDriver = document.getElementById("tipeDriver")
    let passenger = document.getElementById("inputPenumpang");
    let date = document.getElementById("inputDate");
    let time = document.getElementById("inputHours");

    let selectedTipeDriver = tipeDriver.value;

    let passengerSeat = 0;
    passengerSeat = passenger.value;

    let dateSeat = date.value;
    let timeSeat = time.value;
    let inputDateTime = dateSeat + "T" + timeSeat + "Z";
    if (selectedTipeDriver == 0 || timeSeat == "" || dateSeat == "") {
      alert("Silakan lengkapi form!");
      return;
    }
    let select = ((selectedTipeDriver == 1) ? true : false);

    let filteredCars = await cars.filter((car) => {
      if (passengerSeat == "") {
        if (select) { //true
          return (car.available == true) && Date.parse(car.availableAt) > Date.parse(inputDateTime);
        } else {
          return (car.available == false) && Date.parse(car.availableAt) > Date.parse(inputDateTime);
        }
      } else { //passengerseat ada
        if (select) {
          return (car.available == true) && Date.parse(car.availableAt) > Date.parse(inputDateTime) && car.capacity >= passengerSeat;
        } else {
          return (car.available == false) && Date.parse(car.availableAt) > Date.parse(inputDateTime) && car.capacity >= passengerSeat;
        }
      }
    });
    Car.init(filteredCars)
    // console.log()
    await this.run()
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}