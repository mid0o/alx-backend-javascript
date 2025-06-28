const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  describe('Index page', () => {
    it('GET / returns correct status code', (done) => {
      request.get(`${API_URL}/`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('GET / returns correct welcome message', (done) => {
      request.get(`${API_URL}/`, (error, response, body) => {
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('GET /cart/:id returns correct status code for valid :id', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('GET /cart/:id returns correct content for valid :id', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('GET /cart/:id returns 404 status code for invalid :id', (done) => {
      request.get(`${API_URL}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
