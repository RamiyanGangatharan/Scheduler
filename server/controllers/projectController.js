const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.createProject = async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};
