'use strict';

module.exports = function(Project) {

  Project.getAllProjects = function(next) {
    Project.find(function(err, data) {
      if (err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      })
    });
  }

  Project.remoteMethod('getAllProjects', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'projects',
      type: 'Project'
    }
  });

  Project.addProject = function(pid, prospectID, ProjectName, location, stage, status, startDate, endDate, projectDescription, next) {

    const req = {
      pid,
      prospectID,
      ProjectName,
      location,
      stage,
      status,
      startDate,
      endDate,
      projectDescription
    };

    const projectDetails = new Project(req);
    projectDetails.save(function(err) {
      if (err)
        console.log('eror occured: ', err);
      next(err, 'Project Added!');
    });
  }

  Project.remoteMethod('addProject', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'pid',
      type: 'String',
      required: true,
      description: 'Project ID',
      http: {
        source: 'query'
      }
    }, {
      arg: 'prospectID',
      type: 'String',
      required: true,
      description: '',
      http: {
        source: 'query'
      }
    }, {
      arg: 'ProjectName',
      type: 'String',
      required: true,
      description: 'Name of the project',
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
      arg: 'stage',
      type: 'String',
      required: true,
      description: 'Project Stage',
      http: {
        source: 'query'
      }
    },{
      arg: 'status',
      type: 'String',
      required: true,
      description: 'Project status',
      http: {
        source: 'query'
      }
    },{
      arg: 'startDate',
      type: 'Date',
      required: true,
      description: 'Start Date of the project',
      http: {
        source: 'query'
      }
    },{
      arg: 'endDate',
      type: 'Date',
      required: false,
      description: 'End Date of the project',
      http: {
        source: 'query'
      }
    },{
      arg: 'projectDescription',
      type: 'String',
      required: false,
      description: 'Project Description',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'Projects',
      type: 'Project'
    }
  });

  Project.updateProject = function(pid, prospectID, ProjectName, location, stage, status, startDate, endDate, projectDescription, next) {

    const req = {
      pid,
      prospectID,
      ProjectName,
      location,
      stage,
      status,
      startDate,
      endDate,
      projectDescription
    };

    Project.findOne({where: {pid: req.pid}}, function(err, data) {
      if (err)
        console.log('error occured: ', err);
      for (const prop in req) {
        if (req[prop])
          data[prop] = req[prop];
      }
      Project.upsert(data, function(err, project) {
        if (err)
          console.log('error occured: ', err);
        next(err, {message: 'Project Updated!'});
      });
    });
  }

  Project.remoteMethod('updateProject', {
    http: {
      path: '/',
      verb: 'put'
    },
    accepts: [{
      arg: 'pid',
      type: 'String',
      required: true,
      description: 'Project ID',
      http: {
        source: 'query'
      }
    }, {
      arg: 'prospectID',
      type: 'String',
      description: '',
      http: {
        source: 'query'
      }
    }, {
      arg: 'ProjectName',
      type: 'String',
      description: 'Name of the project',
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
      arg: 'stage',
      type: 'String',
      description: 'Project Stage',
      http: {
        source: 'query'
      }
    },{
      arg: 'status',
      type: 'String',
      description: 'Project status',
      http: {
        source: 'query'
      }
    },{
      arg: 'startDate',
      type: 'Date',
      description: 'Start Date of the project',
      http: {
        source: 'query'
      }
    },{
      arg: 'endDate',
      type: 'Date',
      description: 'End Date of the project',
      http: {
        source: 'query'
      }
    },{
      arg: 'projectDescription',
      type: 'String',
      description: 'Project Description',
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'Projects',
      type: 'Project'
    }
  });

  Project.removeProject = function(pid, next) {

    Project.remove({pid: pid}, function(err, data) {
      if(err) {
        console.log('error occured: ', err);
      }
      next(err, "Project Deleted!");
    });
  }

  Project.remoteMethod('removeProject', {
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
