class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  validateType (type) {
    if (![
      'engineer',
      'manager',
      'salesman',
    ].includes(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString () {
    return `${this.name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer';
  }
}
class Manager extends Employee {
  get type() {
    return 'manager';
  }
}
class Salesman extends Employee {
  get type() {
    return 'salesman';
  }
}

function createEmployee(name, type) {
  switch (type) {
    case 'engineer': return new Engineer(name, type);
    case 'manager': return new Manager(name, type);
    case 'salesman': return new Salesman(name, type);
    default: throw new Error(`Employee cannot be of type ${type}`);
  }
}

export default Employee;
