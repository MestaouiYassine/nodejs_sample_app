const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Basic routes tests', function () {
  it('GET to should return 200', function (done) {
    chai
      .request(server)
      .get('')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });

  // it('POST to /api/employee should return 200', function (done) {
  //   chai
  //     .request(server)
  //     .get('/api/employee')
  //     .end(function (err, res) {
  //       res.should.have.status(200);
  //       done();
  //     });
  // });
});
