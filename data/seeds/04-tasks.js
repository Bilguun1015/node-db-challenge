exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        {project_id: 1, task_number:1, description: 'prepare the wood', notes: '', completed: false},
        {project_id: 1, task_number:3, description: 'choose the nails', notes: '', completed: false},
        {project_id: 1, task_number:2, description: 'cut the wood according to the scetch', notes: '', completed: false},
        {project_id: 2, task_number:1, description: 'prepare the wood', notes: '', completed: false},
        {project_id: 2, task_number:3, description: 'sand down the wood', notes: '', completed: false},
        {project_id: 2, task_number:2, description: 'cut the wood according to the scetch with the tablesaw', notes: '', completed: false},
    ]);
};