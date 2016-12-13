'use strict';

module.exports = function(Resource) {

  Resource.getAllResources = function(next) {
    Resource.find(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      })
    });
  }

  Resource.remoteMethod('getAllResources', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'resources',
      type: 'Resource'
    }
  });

  Resource.addResource = function(pid, al, sal, manager, architect, dot, vp, next) {

    const req = {
      pid,
      al,
      sal,
      manager,
      architect,
      dot,
      vp
    };

    const resourceDetails = new Resource(req);
    resourceDetails.save(function(err) {
      if (err)
        console.log('eror occured: ', err);
      next(err, 'Resource Added!');
    });
  }

  Resource.remoteMethod('addResource', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'pid',
      type: 'String',
      description: 'Project ID',
      required: true,
      http: {
        source: 'query'
      }
    },{
      arg: 'al',
      type: 'object',
      description: 'Associate Level Requirement : Enter {"currentNumber": , "requiredNumber": }',
      http: {
        source: 'query'
      }
    }, {
      arg: 'sal',
      type: 'object',
      description: 'Senior Associate Level Requirement',
      http: {
        source: 'query'
      }
    }, {
      arg: 'manager',
      type: 'object',
      description: 'Manager Requirement',
      http: {
        source: 'query'
      }
    }, {
      arg: 'architect',
      type: 'object',
      description: 'Architect Requirement',
      http: {
        source: 'query'
      }
    }, {
      arg: 'dot',
      type: 'object',
      description: 'DOT Requirement',
      http: {
        source: 'query'
      }
    },{
      arg: 'vp',
      type: 'object',
      description: 'VP Requirement',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'resources',
      type: 'Resource'
    }
  });

  Resource.updateResource = function(pid, al, sal, manager, architect, dot, vp, next) {

    const req = {
      pid,
      al,
      sal,
      manager,
      architect,
      dot,
      vp
    };

    Resource.findOne({where: {pid: req.pid}}, function(err, data) {
      if (err)
        console.log('error occured: ', err);
      for (const prop in req) {
        if (req[prop])
          data[prop] = req[prop];
      }
      Resource.upsert(data, function(err, resource) {
        if (err)
          console.log('error occured: ', err);
        next(err, {message: 'Resource Updated!'});
      });
    });
  }

  Resource.remoteMethod('updateResource', {
    http: {
      path: '/',
      verb: 'put'
    },
    accepts: [{
      arg: 'pid',
      type: 'String',
      description: 'Project ID',
      required: true,
      http: {
        source: 'query'
      }
    },{
      arg: 'al',
      type: 'object',
      description: 'Associate Level Requirement : Enter {"currentNumber": , "requiredNumber": }',
      http: {
        source: 'query'
      }
    }, {
      arg: 'sal',
      type: 'object',
      description: 'Senior Associate Level Requirement',
      http: {
        source: 'query'
      }
    }, {
      arg: 'manager',
      type: 'object',
      description: 'Manager Requirement',
      http: {
        source: 'query'
      }
    }, {
      arg: 'architect',
      type: 'object',
      description: 'Architect Requirement',
      http: {
        source: 'query'
      }
    }, {
      arg: 'dot',
      type: 'object',
      description: 'DOT Requirement',
      http: {
        source: 'query'
      }
    },{
      arg: 'vp',
      type: 'object',
      description: 'VP Requirement',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'resources',
      type: 'Resource'
    }
  });

  Resource.removeResource = function(pid, next) {

    Resource.remove({pid: pid}, function(err, data) {
      if(err) {
        console.log('error occured: ', err);
      }
      next(err, "Resource Deleted!");
    });
  }

  Resource.remoteMethod('removeResource', {
    http: {
      path: '/',
      verb: 'delete'
    },
    accepts: [{
      arg: 'pid',
      type: 'String',
      description: 'Project ID',
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
