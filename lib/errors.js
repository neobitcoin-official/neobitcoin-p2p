'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on neobitcoin-p2p Module {0}'
};

module.exports = require('neobitcoin-lib').errors.extend(spec);
