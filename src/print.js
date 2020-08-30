function printOwing(invoice) {
  let owing = printInvoiceBanner();
  
  let outstanding = calculateOutstanding(invoice.borderSpacing);

  invoice.dueDate = calculateDueDate();

  // print details
  owing += `name: ${invoice.customer}\n`;
  owing += `amount: ${outstanding}\n`;
  owing += `due: ${invoice.dueDate.toLocaleDateString()}\n`;
  return owing;
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
