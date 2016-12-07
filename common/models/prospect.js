'use strict';

module.exports = function(Prospect) {

  Prospect.getAllProspects = function(next) {
    Prospect.find(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      })
    });
  }

  Prospect.remoteMethod('getAllProspects', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'prospect',
      type: 'Prospect'
    }
  });

  Prospect.addProspect = function(prospectID, clientID, sapientPOCID, scgID, prospectName, forcastedRevenue, siRevenue, currencyCode, dateAdded, status, probability, nextUpdate, notes, next) {

    const req = {
      prospectID,
      clientID,
      sapientPOCID,
      scgID,
      prospectName,
      forcastedRevenue,
      siRevenue,
      currencyCode,
      dateAdded,
      status,
      probability,
      nextUpdate,
      notes
    };

    const scgDetails = new Prospect(req);
    scgDetails.save(function(err) {
      if (err)
        console.log('eror occured: ', err);
      next(err, 'Prospect Added!');
    });
  }

  Prospect.remoteMethod('addProspect', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'prospectID',
      type: 'String',
      required: true,
      description: 'Prospect ID',
      http: {
        source: 'query'
      }
    }, {
      arg: 'clientID',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'sapientPOCID',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'scgID',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'prospectName',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'forcastedRevenue',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'siRevenue',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'currencyCode',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'dateAdded',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'status',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'probability',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'nextUpdate',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'notes',
      type: 'String',
      required: true,
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'prospect',
      type: 'Prospect'
    }
  });

  Prospect.updateProspect = function(scgID, scgName, next) {

    const req = {
      scgID,
      scgName
    };

    Prospect.findOne({where: {scgID: req.scgID}}, function(err, data) {
      if (err)
        console.log('error occured: ', err);
      for (const prop in req) {
        if (req[prop])
          data[prop] = req[prop];
      }
      Prospect.upsert(data, function(err, scg) {
        if (err)
          console.log('error occured: ', err);
        next(err, {message: 'Prospect Updated!'});
      });
    });
  }

  Prospect.remoteMethod('updateProspect', {
    http: {
      path: '/',
      verb: 'put'
    },
    accepts: [{
      arg: 'prospectID',
      type: 'String',
      description: 'Prospect ID',
      required: true,
      http: {
        source: 'query'
      }
    }, {
      arg: 'clientID',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'sapientPOCID',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'scgID',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'prospectName',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'forcastedRevenue',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'siRevenue',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'currencyCode',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'dateAdded',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'status',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'probability',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'nextUpdate',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    },{
      arg: 'notes',
      type: 'String',
      description: 'Prospect Name',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'scg',
      type: 'Prospect'
    }
  });

  Prospect.removeProspect = function(prospectID, next) {

    Prospect.remove({prospectID: prospectID}, function(err, data) {
      if(err) {
        console.log('error occured: ', err);
      }
      next(err, "Prospect Deleted!");
    });
  }

  Prospect.remoteMethod('removeProspect', {
    http: {
      path: '/',
      verb: 'delete'
    },
    accepts: [{
      arg: 'prospectID',
      type: 'String',
      description: 'Prospect ID',
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
