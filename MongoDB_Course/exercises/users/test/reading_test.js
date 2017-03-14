const assert   = require('assert');
const User     = require('../src/user');

describe('Reading users out of the database', () => {
  let joe, maria, alex, zach;

  // Declare User to test
  beforeEach((done) => {
    joe = new User({name: 'Joe'});
    alex = new User({name: 'Alex'});
    maria = new User({name: 'Maria'});
    zach = new User({name: 'Zach'});

    Promise.all([alex.save(), joe.save(), maria.save(), zach.save()])
      .then(() => done());

  });

  it('find all users with a a name of joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });

  it('find a user with a particular id', (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });

  it('can skip and limit the result set', (done) => {
    User.find({}).skip(1).limit(2)
  });
});
