const db = require('../database');

const carowner = {
  get: function(callback) {
    return db.query('select * from carowner order by idcarowner desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  add: function(carowner, callback) {
    return db.query(
      'insert into carowner (idcarowner, idcar, idowner) values(?,?,?)',
      [carowner.idcarowner, carowner.idcar, carowner.idowner],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from carowner where idcarowner=?', [id], callback);
  },
  update: function(id, carowner, callback) {
    return db.query(
      'update carowner set idcarowner=?,idcar=?, idowner=? where idcarowner=?',
      [carowner.idcarowner, carowner.idcar, carowner.idowner, id],
      callback
    );
  }
};
module.exports = carowner;