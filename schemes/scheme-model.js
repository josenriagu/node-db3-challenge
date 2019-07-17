const db = require('../data/dbConfig');

module.exports = {
   find,
   findById,
   add,
   update,
   remove,
   findSteps,
};

function find() {
   return db('schemes');
}

function findById(id) {
   return db('schemes')
      .where({ id })
}

function findSteps(schemeId) {
   return db('steps')
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .select('step_number', 'instructions')
      .where('scheme_id', schemeId)
      .orderBy('steps.step_number');
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