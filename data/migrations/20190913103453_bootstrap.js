
exports.up = function(knex) {
  return knex.schema
    .createTable('resources', tbl => {
        tbl.increments();

        tbl.string('resource_name')
            .unique();
    })

    .createTable('projects', tbl => {
        tbl.increments();

        tbl.string('project_name')
            .notNullable();

        tbl.text('description', 1024);

        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })

    .createTable('project_resources', tbl => {
        tbl.increments();

        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        tbl.text('description', 1024);
    })

    .createTable('tasks', tbl => {
        tbl.increments();
        
        tbl.integer('task_number')
          .unsigned()
          .notNullable();

        tbl.text('description', 512)
            .notNullable();

        tbl.text('notes', 1024);

        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);

        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources');
};
