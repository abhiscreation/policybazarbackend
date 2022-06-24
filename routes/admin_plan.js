var express = require('express');
var router = express.Router();
var plan = require('./admin_plan_model');

// Insert data customer login
router.post('/insert', function(req, res) {
    console.log(req.body)
    const Plan = new plan(req.body);
    Plan.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successfully Inserted"})
        }
    })
});

//display data of all patients
router.get("/display", function (req, res) {
    plan.find({},function (err, data) {
         if (err) {
           res.status(500).json({ status: false, message: err });
         } else {
           res.status(200).json({ status: true, data, message: "Above Data is available" });
           console.log(data)
         }
       })
     }); 

     //get result of particular patient by id
     router.get("/:_id", function (req, res) {
      const { _id } = req.params;
      plan.findOne({ _id }, function (err, data) {
        if (err) {
          res.status(500).json({ status: false, message: err });
        } else {
          res.status(200).json({ status: true, data, message: "Data found!" });
          console.log(data)
        }
      });
    });

    //update data of particular patient by id
router.put("/update/:_id", function (req, res) {
        const { _id } = req.params;
        plan.findOneAndUpdate({ _id }, req.body, function (err, data) {
          if (err) {
            res.status(500).json({ status: false, message: err.toString() });
          } else {
            res.status(200)
              .json({ status: true, data, message: "User updated successfully!" });
          }
        });
      }); 

      //delete data of particular patient by id
router.delete("/delete/:_id", function (req, res) {
            const { _id } = req.params;
            plan.findOneAndDelete({ _id }, function(err, data) {
              if (err) {
                res.status(500).json({ status: false, message: err.toString() });
              } else {
                res
                  .status(200)
                  .json({ status: true, data, message: "User deleted successfully!" });
              }
            });
          })

module.exports = router;