var express = require("express");

var router = express.Router();

var burger=require("../models/burger");



router.get("/", function(req,res) {
    burger.selectAll(function(data){
        var hbsObject={
            burger: data
        };
        res.render("index", hbsObject);
    })
});

router.post("/api/burger", function(req, res) {
    burger.insertOne(["burger_name","devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  module.exports=router;