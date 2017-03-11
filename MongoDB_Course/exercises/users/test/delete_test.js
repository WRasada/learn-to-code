const assert = require('assert');
const User   = require('../src/user');

describe('Deleteing a user', () => {
    let joe;

    beforeEach((done) => {
      joe = new User({name: 'Joe'});
      joe.save()
        .then(() => done());
    });

    it('model instance remove', (done) => {
      joe.remove()
        .then(() => User.findOne({ name: 'Joe' }))
        .then((user) => {
          assert(user === null);
          done();
        });
    });

    it('class method remove', (done) => {
      User.remove({name: 'Joe'})
        .then(() => User.findOne({ name: 'Joe' }))
        .then((user) => {
          assert(user === null);
          done();
        });
    });

    it('class method findAndRemove', () => {
      User.findAndRemove({})
    });

    it('class method findByIdAndRemove', () => {

    });

});
