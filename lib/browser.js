var racer = require('racer');

racer.Model.prototype._createSocket = function(bundle) {
  var options = bundle.racerWebSocket;
  var base = (options && options.path) || '/';

  if (bundle.mount) base = bundle.mount + base;

  var loc = window.location;
  var protocol = loc.protocol === 'https:' ? 'wss:' : 'ws:';
  return new WebSocket(protocol + '//' + loc.host + base);
};
