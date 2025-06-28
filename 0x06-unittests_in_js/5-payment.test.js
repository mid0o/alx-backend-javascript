const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  // This hook runs before each test in this suite
  beforeEach(() => {
    // Create a new spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // This hook runs after each test in this suite
  afterEach(() => {
    // Restore the spy to its original state after each test
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" and be called once for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" and be called once for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
