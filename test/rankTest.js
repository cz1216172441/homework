const test = require('ava');
const { rating } = require('../src/rank');

test('should_return_B_when_rating_given_voyage_with_west_indies_and_length_10', t => {
  const voyage = { zone: 'west-indies', length: 10 };
  const history = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 }
  ];
  const result = rating(voyage, history);
  t.is(result, 'B');
})

test('should_return_B_when_rating_given_voyage_with_west_indies_and_length_2', t => {
  const voyage = { zone: 'west-indies', length: 2 };
  const history = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 }
  ];
  const result = rating(voyage, history);
  t.is(result, 'B');
})

test('should_return_A_when_rating_given_voyage_with_china_and_length_2', t => {
  const voyage = { zone: 'china', length: 2 };
  const history = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 }
  ];
  const result = rating(voyage, history);
  t.is(result, 'A');
})

test('should_return_A_when_rating_given_history_length_5_and_voyage_with_china_and_length_2', t => {
  const voyage = { zone: 'china', length: 2 };
  const history = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 },
    { zone: 'east-africa', profit: 7 }
  ];
  const result = rating(voyage, history);
  t.is(result, 'A');
})

test('should_return_B_when_rating_given_history_length_5_and_voyage_with_east_indies_and_length_2', t => {
  const voyage = { zone: 'east-indies', length: 2 };
  const history = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 },
    { zone: 'east-africa', profit: 7 }
  ];
  const result = rating(voyage, history);
  t.is(result, 'B');
})

test('should_return_A_when_rating_given_history_length_11_and_voyage_with_china_and_length_19', t => {
  const voyage = { zone: 'china', length: 19 };
  const history = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 },
    { zone: 'east-africa', profit: 7 },
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 },
    { zone: 'east-africa', profit: 7 },
    { zone: 'east-africa', profit: 7 }
  ];
  const result = rating(voyage, history);
  t.is(result, 'A');
})
