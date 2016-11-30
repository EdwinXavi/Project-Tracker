'use strict';

module.exports = function(TypeOfProjects) {

  TypeOfProjects.addType = function(name, next) {
    const typeOfProjects = new TypeOfProjects({name});
    typeOfProjects.save(function(err, data) {
      if(err)
        console.log('error occured: ', err);
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      });
    });
  }

  TypeOfProjects.remoteMethod('addType', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts: [{
      arg: 'name',
      type: 'String',
      required: true,
      http: {
        source: 'query'
      }
    }],
    returns: {
      arg: 'type',
      type: 'Object'
    }
  });

  TypeOfProjects.getTypes = function(next) {
    TypeOfProjects.find(function(err, data) {
      if(err) {
        console.log('error occured: ', err);
      }
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], data));
        next(err, data);
      });
    });
  }

  TypeOfProjects.remoteMethod('getTypes', {
    http: {
      path: '/',
      verb: 'get'
    },
    returns: {
      arg: 'types',
      type: 'TypeOfProjects'
    }
  });

  TypeOfProjects.deleteType = function(id, next) {
    TypeOfProjects.remove({id: id}, function(err, data) {
      if(err)
        console.log('error occured: ', err);
      next(err, 'Type deleted!');
    });
  }

  TypeOfProjects.remoteMethod('deleteType', {
    http: {
      path: '/',
      verb: 'delete'
    },
    accepts: [{
      arg: 'id',
      type: 'string',
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
