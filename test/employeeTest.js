const test = require('ava');
import Employee from '../src/employee';

test('should_return_employee_when_new_employee_given_type_engineer', t => {
  const employee = new Employee('roy', 'engineer');
  const actualResult = employee.toString();
  t.is('roy (engineer)', actualResult);
})

test('should_return_employee_when_new_employee_given_type_manager', t => {
  const employee = new Employee('roy', 'manager');
  const actualResult = employee.toString();
  t.is('roy (manager)', actualResult);
})
