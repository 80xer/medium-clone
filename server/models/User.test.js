const expect = require('chai').expect;
const User = require('./User');

describe('user', () => {
  it('이름은 필수 항목이다.', done => {
    const user = new User();
    user.validate(err => {
      expect(err.errors.name).to.exist;
      done();
    });
  });

  it('이메일은 필수 항목이다.', done => {
    const user = new User();
    user.validate(err => {
      expect(err.errors.email).to.exist;
      done();
    });
  });
});
