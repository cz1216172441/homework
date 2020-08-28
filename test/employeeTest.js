const test = require('ava');
import createEmployee from '../src/employee';

test('should_return_employee_when_create_employee_given_type_engineer', t => {
  const employee = createEmployee('roy', 'engineer');
  const actualResult = employee.toString();
  t.is('roy (engineer)', actualResult);
})

test('should_return_employee_when_create_employee_given_type_manager', t => {
  const employee = createEmployee('roy', 'manager');
  const actualResult = employee.toString();
  t.is('roy (manager)', actualResult);
})

test('should_return_employee_when_create_employee_given_type_salesman', t => {
  const employee = createEmployee('roy', 'salesman');
  const actualResult = employee.toString();
  t.is('roy (salesman)', actualResult);
})

test('should_return_type_error_when_create_employee_given_error_type', t => {
  try {
    createEmployee('roy', 'undefinedType');
  } catch(err) {
    t.is('Employee cannot be of type undefinedType', err.message);
  }
})
