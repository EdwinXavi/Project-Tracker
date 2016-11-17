'use strict';

module.exports = function(Projectdetails) {

  Projectdetails.getAllProjects = function(next) {
    Projectdetails.find(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      })
    });
  }

  Projectdetails.remoteMethod('getAllProjects', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'projects',
      type: 'Projectdetails'
    }
  });

  Projectdetails.addProject = function(clientName, status, probability, location, staffing, next) {

    const req = {
      clientName,
      status,
      probability,
      location,
      staffing
    };
    const projectDetails = new Projectdetails(req);
    projectDetails.save(function(err) {
      if (err)
        console.log('eror occured: ', err);
      next(err, 'Project Added!');
    });
  }

  Projectdetails.remoteMethod('addProject', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'clientName',
      type: 'String',
      required: true,
      description: 'Name of the client',
      http: {
        source: 'query'
      }
    }, {
      arg: 'status',
      type: 'String',
      required: true,
      description: 'Status of the project',
      http: {
        source: 'query'
      }
    }, {
      arg: 'probability',
      type: 'String',
      required: false,
      description: '',
      http: {
        source: 'query'
      }
    }, {
      arg: 'location',
      type: 'String',
      required: true,
      description: 'Location of the project',
      http: {
        source: 'query'
      }
    }, {
      arg: 'staffing',
      type: 'array',
      required: false,
      description: 'type of hiring being done',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'Projects',
      type: 'Projectdetails'
    }
  });

  Projectdetails.updateProject = function(clientName, status, probability, location, staffing, next) {

    const req = {
      clientName,
      status,
      probability,
      location,
      staffing
    };

    Projectdetails.findOne({where: {clientName: req.clientName}}, function(err, data) {
      if (err)
        console.log('error occured: ', err);
      for (const prop in req) {
        if (req[prop])
          data[prop] = req[prop];
      }
      Projectdetails.upsert(data, function(err, project) {
        if (err)
          console.log('error occured: ', err);
        next(err, {message: 'Project Updated!'});
      });
    });
  }

  Projectdetails.remoteMethod('updateProject', {
    http: {
      path: '/',
      verb: 'put'
    },
    accepts: [{
      arg: 'clientName',
      type: 'String',
      description: 'Name of the client',
      http: {
        source: 'query'
      }
    }, {
      arg: 'status',
      type: 'String',
      description: 'Status of the project',
      http: {
        source: 'query'
      }
    }, {
      arg: 'probability',
      type: 'String',
      description: '',
      http: {
        source: 'query'
      }
    }, {
      arg: 'location',
      type: 'String',
      description: 'Location of the project',
      http: {
        source: 'query'
      }
    }, {
      arg: 'staffing',
      type: 'array',
      description: 'type of hiring being done',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'Projects',
      type: 'Projectdetails'
    }
  });

  Projectdetails.removeProject = function(id, next) {

    Projectdetails.remove({id: id}, function(err, data) {
      if(err) {
        console.log('error occured: ', err);
      }
      next(err, "Project Deleted!");
    });
  }

  Projectdetails.remoteMethod('removeProject', {
    http: {
      path: '/',
      verb: 'delete'
    },
    accepts: [{
      arg: 'id',
      type: 'String',
      description: 'Client Name',
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
