const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  describe('Index page', () => {
    const url = 'http://localhost:7865';
    it('should return status code 200', (done) => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('should return status 200 when :id is a number', (done) => {
      request('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status 404 when :id is NOT a number', (done) => {
      request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
