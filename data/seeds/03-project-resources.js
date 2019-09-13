exports.seed = function(knex, Promise) {
    return knex('project_resources').insert([
        {project_id: 1, resource_id: 1, description: 'normal wood hammer'},
        {project_id: 1, resource_id: 2, description: 'appropriate length nails'},
        {project_id: 1, resource_id: 6, description: 'prepared wood for birdhouse'},
        {project_id: 2, resource_id: 3, description: 'normal wood screws'},
        {project_id: 2, resource_id: 5, description: 'battery powered driver'},
        {project_id: 2, resource_id: 7, description: 'normal table saw'},
        {project_id: 2, resource_id: 6, description: 'prepared wood for chair'}
    ]);
};