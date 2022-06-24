var express = require('express');
var router = express.Router();
var insurance = require('./insurance_model');

// Insert data customer login
router.post('/insert', function(req, res) {
    console.log(req.body)
    const Insurance = new insurance(req.body);
    Insurance.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successfully Inserted"})
        }
    })
});

//display data of all patients
router.get("/display", function (req, res) {
    insurance.find({},function (err, data) {
         if (err) {
           res.status(500).json({ status: false, message: err });
         } else {
           res.status(200).json({ status: true, data, message: "Above Data is available" });
           console.log(data)
         }
       }).populate("user","fullname")
     }); 

     //get result of particular patient by id
     router.get("/:_id", function (req, res) {
      const { _id } = req.params;
      insurance.findOne({ _id }, function (err, data) {
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
        insurance.findOneAndUpdate({ _id }, req.body, function (err, data) {
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
            insurance.findOneAndDelete({ _id }, function(err, data) {
              if (err) {
                res.status(500).json({ status: false, message: err.toString() });
              } else {
                res
                  .status(200)
                  .json({ status: true, data, message: "User deleted successfully!" });
              }
            });
          })

          router.get("/userbydetail/:user", function (req, res) {
            const { user } = req.params;
           insurance.findOne({user}, function (err, data) {
              if (err) {
                res.status(500).json({ status: false, message: err });
              } else {
                res.status(200).json({ status: true, data, message: "Data found!" });
                console.log(data)
              }
            }).populate("user","fullname");
          });

module.exports = router;