const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findResources,
    findTasks,
    add,
    addResource,
    addTask
}

function find() {
    return db('projects')
        .then(projects => {
            projects.forEach( project => {
                if(project.completed){
                    project.completed = true;
                } else {
                    project.completed = false;
                };
            })
            return projects;
        });
};

function findById(id) {
    return db('projects')
        .where({ id })
        .then(projects => {
            const project = projects[0];
            if(project) {
                return project;
            };
        });
};

function add(project){
    return db('projects')
        .insert(project)
        .then(ids => {
            return ids[0];
        });
};

function findResources(){
    return db('resources')
        .then(resources => {
            return resources;
        });
};

function addResource(resource){
    return db('resources')
        .insert(resource)
        .then(ids => {
            return ids[0];
        });
};

function findTasks(id){
    return db('projects as p')
        .join('tasks as t', 'p.id', 't.project_id')
        .where({project_id: id})
        .select('p.project_name', 'p.description', 't.id', 't.description', 't.notes', 't.completed')
        // .groupBy('p.project_name')
        .orderBy('t.task_number')
        .then(tasks => {
            tasks.forEach( task => {
                if(task.completed){
                    task.completed = true;
                } else {
                    task.completed = false;
                };
            })
            return tasks;
        });
};

function addTask(taskData, project_id){
    return db('tasks')
        .where({project_id})
        .orderBy('task_number')
        .then( tasks => {
            let newTaskN;
            if(tasks.length === 0){
                newTaskN = 1;
            }
            else {
                newTaskN = tasks[tasks.length - 1].task_number + 1;
            }
            taskData.task_number = newTaskN;
            taskData.project_id = project_id;
            return db('tasks')
                .insert(taskData)
                .then( ids => {
                    return ids[0];
                });
        });
};

