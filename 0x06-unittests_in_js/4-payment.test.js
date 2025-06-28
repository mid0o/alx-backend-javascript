const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and spy on console.log', () => {
    // Stub the Utils.calculateNumber method to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log to check what's being printed
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    // Assert that console.log was called with the message including the stub's return value
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
