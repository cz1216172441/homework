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
