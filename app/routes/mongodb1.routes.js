module.exports = app => {
    const mongodb1 = require("../controllers/crud.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", mongodb1.create);
    // Retrieve all mongodb1
    router.get("/", mongodb1.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", mongodb1.findOne);
    // Update a Tutorial with id
    router.put("/:id", mongodb1.update);
    // Delete a Tutorial with id
    router.delete("/:id", mongodb1.delete);
    // Create a new Tutorial
    router.delete("/", mongodb1.deleteAll);
    app.use('/api/mongodb1', router);
};