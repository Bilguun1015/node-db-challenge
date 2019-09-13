const db = require('../data/db-config.js');

module.exports = {
    find,
    findResources,
    findTasks,
    add,
    addResource,
    addTask
}

function find() {
    return db('projects')
        .then(projects => {
            return projects;
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

function findTasks(){
    
}

function addTask(){

}

