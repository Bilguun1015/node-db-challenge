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

//middleware


module.exports = router;


