
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

describe('API Tests', () => {
  it('should return "Hello World from Express!"', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello World from Express!');
        done();
      });
  });
});
