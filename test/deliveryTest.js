const test = require('ava');
const { calculateDeliveryDate } = require('../src/delivery');

function plusDays(days) {
  return new Date('2020-08-30').setDate(30 + days);
}

test('should_add_2_days_when_calculate_delivery_date_given_rush_and_an_order_with_delivery_state_MA', t => {
  let anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = true;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-01').getTime(), actualResult);
})

test('should_add_2_days_when_calculate_delivery_date_given_rush_and_an_order_with_delivery_state_CT', t => {
  let anOrder = {
    deliveryState: 'CT',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = true;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-01').getTime(), actualResult);
})

test('should_add_3_days_when_calculate_delivery_date_given_rush_and_an_order_with_delivery_state_NY', t => {
  let anOrder = {
    deliveryState: 'NY',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = true;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-02').getTime(), actualResult);
})

test('should_add_3_days_when_calculate_delivery_date_given_rush_and_an_order_with_delivery_state_NH', t => {
  let anOrder = {
    deliveryState: 'NH',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = true;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-02').getTime(), actualResult);
})

test('should_add_4_days_when_calculate_delivery_date_given_rush_and_an_order_with_other_delivery_state', t => {
  let anOrder = {
    deliveryState: 'TEST',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = true;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-03').getTime(), actualResult);
})

test('should_add_4_days_when_calculate_delivery_date_given_not_rush_and_an_order_with_delivery_state_MA', t => {
  let anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = false;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-03').getTime(), actualResult);
})

test('should_add_4_days_when_calculate_delivery_date_given_not_rush_and_an_order_with_delivery_state_CT', t => {
  let anOrder = {
    deliveryState: 'CT',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = false;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-03').getTime(), actualResult);
})

test('should_add_4_days_when_calculate_delivery_date_given_not_rush_and_an_order_with_delivery_state_NY', t => {
  let anOrder = {
    deliveryState: 'NY',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = false;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-03').getTime(), actualResult);
})

test('should_add_5_days_when_calculate_delivery_date_given_not_rush_and_an_order_with_delivery_state_ME', t => {
  let anOrder = {
    deliveryState: 'ME',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = false;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-04').getTime(), actualResult);
})

test('should_add_5_days_when_calculate_delivery_date_given_not_rush_and_an_order_with_delivery_state_NH', t => {
  let anOrder = {
    deliveryState: 'ME',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = false;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-04').getTime(), actualResult);
})

test('should_add_6_days_when_calculate_delivery_date_given_not_rush_and_an_order_with_other_delivery_state', t => {
  let anOrder = {
    deliveryState: 'TEST',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = false;
  const actualResult = calculateDeliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-05').getTime(), actualResult);
})
