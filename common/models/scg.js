'use strict';

module.exports = function(SCG) {

  SCG.getAllSCGs = function(next) {
    SCG.find(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      })
    });
  }

  SCG.remoteMethod('getAllSCGs', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'scg',
      type: 'SCG'
    }
  });

  SCG.addSCG = function(scgID, scgName, next) {

    const req = {
      scgID,
      scgName
    };

    const scgDetails = new SCG(req);
    scgDetails.save(function(err) {
      if (err)
        console.log('eror occured: ', err);
      next(err, 'SCG Added!');
    });
  }

  SCG.remoteMethod('addSCG', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'scgID',
      type: 'String',
      required: true,
      description: 'SCG ID',
      http: {
        source: 'query'
      }
    }, {
      arg: 'scgName',
      type: 'String',
      required: true,
      description: 'SCG Name',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'client',
      type: 'SCG'
    }
  });

  SCG.updateSCG = function(scgID, scgName, next) {

    const req = {
      scgID,
      scgName
    };

    SCG.findOne({where: {scgID: req.scgID}}, function(err, data) {
      if (err)
        console.log('error occured: ', err);
      for (const prop in req) {
        if (req[prop])
          data[prop] = req[prop];
      }
      SCG.upsert(data, function(err, scg) {
        if (err)
          console.log('error occured: ', err);
        next(err, {message: 'SCG Updated!'});
      });
    });
  }

  SCG.remoteMethod('updateSCG', {
    http: {
      path: '/',
      verb: 'put'
    },
    accepts: [{
      arg: 'scgID',
      type: 'String',
      required: true,
      description: 'SCG ID',
      http: {
        source: 'query'
      }
    }, {
      arg: 'scgName',
      type: 'String',
      description: 'SCG Name',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'scg',
      type: 'SCG'
    }
  });

  SCG.removeSCG = function(scgID, next) {

    SCG.remove({scgID: scgID}, function(err, data) {
      if(err) {
        console.log('error occured: ', err);
      }
      next(err, "SCG Deleted!");
    });
  }

  SCG.remoteMethod('removeSCG', {
    http: {
      path: '/',
      verb: 'delete'
    },
    accepts: [{
      arg: 'scgID',
      type: 'String',
      description: 'SCG ID',
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
