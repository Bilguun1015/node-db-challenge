exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        {id: 1, resource_name: 'hammer'},
        {id: 2, resource_name: 'nails'},
        {id: 3, resource_name: 'screws'},
        {id: 4, resource_name: 'drill'},
        {id: 5, resource_name: 'screwdriver'},
        {id: 6, resource_name: 'wood'},
        {id: 7, resource_name: 'tablesaw'}
    ]);
};