const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(40, 11);

  expect(res).toBe(51).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  let res = utils.square(10);

  expect(res).toBe(100).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done();
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(13);
//   // expect({ name: 'Andrew' }).toEqual({ name: 'Andrew' });
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'Wes',
//     age: 25,
//     location: 'Post Falls, ID'
//   }).toInclude({
//     age: 25
//   });
// });

it('should set firstName and lastName', () => {
  let user = {
    age: 26,
    location: 'Post Falls, ID',
  };

  utils.setName(user, 'Wesley Rasada');
  expect(user).toInclude({
    firstName: 'Wesley',
    lastName: 'Rasada'
  }).toBeA('object');
});
