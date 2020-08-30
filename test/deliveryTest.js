const test = require('ava');
const { deliveryDate } = require('../src/delivery');

function plusDays(days) {
  return new Date('2020-08-30').setDate(30 + days);
}

test('should_add_2_days_when_delivery_date_given_rush_and_an_order_with_delivery_state_MA', t => {
  let anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = true;
  const actualResult = deliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-01').getTime(), actualResult);
})

test('should_add_2_days_when_delivery_date_given_rush_and_an_order_with_delivery_state_CT', t => {
  let anOrder = {
    deliveryState: 'CT',
    placedOn: {
      plusDays: plusDays
    }
  }
  const isRush = true;
  const actualResult = deliveryDate(anOrder, isRush);
  t.is(new Date('2020-09-01').getTime(), actualResult);
})
