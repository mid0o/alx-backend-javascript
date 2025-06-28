const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  // ... (Index and Cart page tests from task 9 can be here too)

  describe('GET /available_payments', () => {
    it('should return the correct payment methods object', (done) => {
      request('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const expectedBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        // Use deep.equal for object comparison
        expect(JSON.parse(body)).to.deep.equal(expectedBody);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with the provided username', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: true,
        body: {
          userName: 'Betty',
        },
      };
      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
