'use strict';

module.exports = function(Client) {

  Client.getAllClients = function(next) {
    Client.find(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      })
    });
  }

  Client.remoteMethod('getAllClients', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'clients',
      type: 'Client'
    }
  });

  Client.addClient = function(clientID, clientName, clientPOCName, pocContactNumber, region, city, next) {

    const req = {
      clientID,
      clientName,
      clientPOCName,
      pocContactNumber,
      region,
      city
    };

    const clientDetails = new Client(req);
    clientDetails.save(function(err) {
      if (err)
        console.log('eror occured: ', err);
      next(err, 'Client Added!');
    });
  }

  Client.remoteMethod('addClient', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'clientID',
      type: 'String',
      required: true,
      description: 'Client ID',
      http: {
        source: 'query'
      }
    }, {
      arg: 'clientName',
      type: 'String',
      required: true,
      description: 'Client Name',
      http: {
        source: 'query'
      }
    }, {
      arg: 'clientPOCName',
      type: 'String',
      required: true,
      description: 'Client POC name',
      http: {
        source: 'query'
      }
    }, {
      arg: 'pocContactNumber',
      type: 'String',
      required: true,
      description: 'POC contact number',
      http: {
        source: 'query'
      }
    }, {
      arg: 'region',
      type: 'String',
      required: true,
      description: 'Client Region',
      http: {
        source: 'query'
      }
    },{
      arg: 'city',
      type: 'String',
      required: true,
      description: 'Client city',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'client',
      type: 'Client'
    }
  });

  Client.updateClient = function(clientID, clientName, clientPOCName, pocContactNumber, region, city, next) {

    const req = {
      clientID,
      clientName,
      clientPOCName,
      pocContactNumber,
      region,
      city
    };

    Client.findOne({where: {clientID: req.clientID}}, function(err, data) {
      if (err)
        console.log('error occured: ', err);
      for (const prop in req) {
        if (req[prop])
          data[prop] = req[prop];
      }
      Client.upsert(data, function(err, client) {
        if (err)
          console.log('error occured: ', err);
        next(err, {message: 'Client Updated!'});
      });
    });
  }

  Client.remoteMethod('updateClient', {
    http: {
      path: '/',
      verb: 'put'
    },
    accepts: [{
      arg: 'clientID',
      type: 'String',
      required: true,
      description: 'Client ID',
      http: {
        source: 'query'
      }
    }, {
      arg: 'clientName',
      type: 'String',
      description: 'Client Name',
      http: {
        source: 'query'
      }
    }, {
      arg: 'clientPOCName',
      type: 'String',
      description: 'Client POC name',
      http: {
        source: 'query'
      }
    }, {
      arg: 'pocContactNumber',
      type: 'String',
      description: 'POC contact number',
      http: {
        source: 'query'
      }
    }, {
      arg: 'region',
      type: 'String',
      description: 'Client Region',
      http: {
        source: 'query'
      }
    },{
      arg: 'city',
      type: 'String',
      description: 'Client city',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'client',
      type: 'Client'
    }
  });

  Client.removeClient = function(clientID, next) {

    Client.remove({clientID: clientID}, function(err, data) {
      if(err) {
        console.log('error occured: ', err);
      }
      next(err, "Client Deleted!");
    });
  }

  Client.remoteMethod('removeClient', {
    http: {
      path: '/',
      verb: 'delete'
    },
    accepts: [{
      arg: 'clientID',
      type: 'String',
      description: 'Client ID',
      required: true,
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'message',
      type: 'String'
    }
  });
};
