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

export default Employee;
