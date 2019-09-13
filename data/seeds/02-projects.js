exports.seed = function(knex, Promise) {
    return knex('projects').insert([
        {id: 1, project_name: 'bird house', description:'Making bird house for kids to hang up', completed: false},
        {id: 2, project_name: 'chairs', description:'chairs for dinner table make for 6 people', completed: false}
    ]);
};