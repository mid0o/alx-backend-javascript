const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy on the calculateNumber method of the Utils object
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called exactly once
    expect(calculateNumberSpy.calledOnce).to.be.true;
    // Assert that the spy was called with the expected arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the original method to avoid affecting other tests
    calculateNumberSpy.restore();
  });
});
