const test = require('ava');
const { printOwing } = require('../src/print');

test('should_return_invoice_info_when_print_owning_given_invoice', t => {
  const invoice = {
    customer: 'roy',
    borderSpacing: [
      { amount: 1 }
    ]
  };
  const actualResult = printOwing(invoice);
  const today = new Date();
  const dueDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  const result = '***********************\n' +
  '**** Customer Owes ****\n' +
  '***********************\n' + 
  'name: roy\n' +
  'amount: 1\n' +
  `due: ${dueDay.toLocaleDateString()}\n`;
  t.is(result, actualResult);
})
