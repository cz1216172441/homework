function printOwing(invoice) {
  let owing = printInvoiceBanner();
  
  let outstanding = 0;

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

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

module.exports = {
  printOwing
}
