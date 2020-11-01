var express = require("express");
var burger=require("../models/burger");

var router = express.Router();

router.get("/", function(req,res) {
    burger.selectAll(function(data){
        var hbsObject={
            burger: data
        };
        res.render(hbsObject);
    })
});

router.post("/api/burger", function(req, res) {
    cat.createOne(["burger_name","devoured"], [req.body.burger_name, req.body.devoured], function(result) {
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
  