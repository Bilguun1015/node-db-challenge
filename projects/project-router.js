const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
    Projects.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "error retreiving projects"});
        });
});

router.post('/projects', (req, res) => {
    const { project_name } = req.body;

    if(!project_name){
        return res.status(400).json({message: 'must include project name'});
    };

    Projects.add(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'error creating new project'})
        });
});

router.get('/resources', (req, res) => {
    Projects.findResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "error retreiving resources"});
        });
});

router.post('/resources', (req, res) => {
    const { resource_name } = req.body;

    if(!resource_name){
        return res.status(400).json({message: 'must include resource name'});
    };

    Projects.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'error adding a resource'})
        });
});

router.get('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
        .then(tasks => {
            if(tasks.length) {
                return res.json(tasks)
            } else {
                res.status(404).json({message: 'could not find tasks for given project'});
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'error finding tasks'})
        });
    });

router.post('/projects/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
    
    if(!req.body.description) {
        return res.status(400).json({message: 'must include description for the task'});
    };
    Projects.findById(id)
    .then(project => {
        if (project) {
        Projects.addTask(taskData, id)
        .then(task => {
            res.status(201).json(task);
        })
        } else {
        res.status(404).json({ message: 'Could not find project with given id.' });
        };
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new task' });
    });
});


module.exports = router;


