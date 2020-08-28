class Employee {
  constructor (name) {
    this._name = name;
  }

  get name() {
    return this._name;
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

export default createEmployee;
