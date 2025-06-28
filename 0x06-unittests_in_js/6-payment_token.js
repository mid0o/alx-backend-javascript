function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // If not success, the function does nothing, returning undefined implicitly.
}

module.exports = getPaymentTokenFromAPI;
