const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  // --- Tests from Task 8 ---
  describe('Index page', () => {
    it('GET / returns correct status code and message', (done) => {
      request.get(`${API_URL}/`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    });
  });

  // --- Tests from Task 9 ---
  describe('Cart page', () => {
    it('GET /cart/:id returns correct status and content for valid :id', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
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

  // --- New Tests for Task 10 ---
  describe('Available Payments page', () => {
    it('GET /available_payments returns correct object', (done) => {
      request.get(`${API_URL}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        const expectedBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(JSON.parse(body)).to.deep.equal(expectedBody);
        done();
      });
    });
  });

  describe('Login page', () => {
    it('POST /login returns correct welcome message', (done) => {
      const options = {
        url: `${API_URL}/login`,
        method: 'POST',
        json: true,
        body: { userName: 'Betty' },
      };
      request(options, (error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Betty');
        done();
      });
    });
  });
});
