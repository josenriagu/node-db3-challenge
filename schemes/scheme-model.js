const db = require('../data/dbConfig');

module.exports = {
   find,
   findById,
   add,
   update,
   remove,
};

function find() {
   return db('schemes');
}

function findById(id) {
   return db('schemes')
      .where({ id })
}

function add(schemes) {
   return db('schemes')
      .insert(schemes)
      .then(ids => {
         return findById(ids[0]);
      });
}

function update(changes, id) {
   return db('schemes')
      .where({ id })
      .update(changes)
      .then(() => {
         return findById(id)
      });
}

function remove(id) {
   return db('schemes')
      .where('id', id)
      .del()
}