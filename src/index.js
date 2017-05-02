const middleware = require('./middleware');
const handlePromiseAction = require('./handlePromiseAction');
const helpers = require('./helpers');

module.exports = {
  middleware,
  handlePromiseAction,
  onRequest: helpers.onRequest,
  onSuccess: helpers.onSuccess,
  onError: helpers.onError,
  isLoading: helpers.isLoading,
  isResolved: helpers.isResolved,
  isRejected: helpers.isRejected,
};
