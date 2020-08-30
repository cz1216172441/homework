function calculateDeliveryDate (anOrder, isRush) {
  if (isRush) {
    return calculateRushDeliveryDate(anOrder);
  } else {
    return calculateRegularDeliveryDate(anOrder);
  }
}

function calculateRegularDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else if (['ME', 'NH'].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function calculateRushDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT'].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  } else if (['NY', 'NH'].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

module.exports = {
  calculateDeliveryDate
}
