const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  // Add the 'done' callback to the test function signature
  it('should return a resolved promise with success data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assertions go inside the .then() block
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        // Call done() to signal that the async test has completed successfully
        done();
      })
      .catch((error) => {
        // If the promise rejects, fail the test by passing the error to done
        done(error);
      });
  });
});
