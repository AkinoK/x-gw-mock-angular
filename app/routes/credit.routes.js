module.exports = app => {
    const credits = require("../controllers/credit.controller.js");
    var router = require("express").Router();
    // Create a new credit
    router.post("/", credits.create);
    // Retrieve all credits
    router.get("/", credits.findAll);
    // Retrieve all published credits
    // router.get("/published", credits.findAllPublished);
    // Retrieve a single credit with id
    router.get("/:id", credits.getCreditById);
    // Update a credit with id
    router.put("/:id", credits.update);
    // Delete a credit with id
    router.delete("/:id", credits.delete);
    // Create a new credit 
    router.delete("/", credits.deleteAll);
    app.use('/api/credits', router);
  };

  // module.exports = router