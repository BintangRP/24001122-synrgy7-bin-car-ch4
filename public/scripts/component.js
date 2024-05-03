class Component {

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    throw new Error('Method render() harus diimplementasikan');
  }

}