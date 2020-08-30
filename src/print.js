function printOwing(invoice) {
  let owing = printInvoiceBanner();
  
  let outstanding = calculateOutstanding(invoice.borderSpacing);

  invoice.dueDate = calculateDueDate();

  owing += printDetails(invoice, outstanding);
  return owing;
}

function printDetails(invoice, outstanding) {
  let details = `name: ${invoice.customer}\n`;
  details += `amount: ${outstanding}\n`;
  details += `due: ${invoice.dueDate.toLocaleDateString()}\n`;
  return details;
}

function printInvoiceBanner() {
  return '***********************\n' +
  '**** Customer Owes ****\n' +
  '***********************\n';
}

function calculateOutstanding(borderSpacings) {
  let outstanding = 0;
  return borderSpacings.reduce((accumulator, currentValue) => accumulator + currentValue.amount, outstanding);
}

function calculateDueDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

module.exports = {
  printOwing
}
