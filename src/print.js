function printOwing(invoice) {
  let owing = '***********************\n' +
    '**** Customer Owes ****\n' +
    '***********************\n';
  
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

module.exports = {
  printOwing
}
