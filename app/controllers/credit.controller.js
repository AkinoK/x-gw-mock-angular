const { onErrorResumeNext } = require("rxjs-compat/operator/onErrorResumeNext");
const db = require("../models");
const Credit = db.credits;
const Op = db.Sequelize.Op;
// Create and Save a new Credit
exports.create = (req, res) => {

};
// Retrieve all Credits from the database.
exports.findAll = (req, res) => {
    const gwnumber = req.query.gwnumber;
    var condition = gwnumber ? { gwnumber: { [Op.iLike]: `%${gwnumber}%` } } : null;
    Credit.findAll({ where: condition })
      .then(data => {
        res.send(data);
        // res.status(200).send({
        //   message: "OK"
        // })
        })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving credits."
        });
      });
};
exports.getCreditById = (req,res) =>{
  const creditId = req.params.id;
  Credit.findByPk(creditId)
  .then(data => {
    console.log("OK___!");
    console.log(creditId);
    res.send(data);
    // res.status(200).json({msg: "AAAAA"});
  })
  .catch(err =>{
    res.status(500).json({
      message: 'Error', msg: err.message
    });
  })

//   Credit.findByPk(creditId, (err, credit) => {
//     console.log("OK");
//     if (err) {
//         return res.status(400).json({ success: false, error: err })
//     }

//   //   return res.status(200).json({ success: true, data: credit })
//   // }).clone().catch(err => console.log(err))
//   // console.log(credit);
// })
}
// Find a single Credit with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Credit.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//         // res.status(200).send({
//         //   message: "OK"
//         // });
//         // console.log("ok");
//       } else {
//         res.status(404).send({
//           message: `Cannot find Credit with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Credit with ID ${req?.params?.id}"
//       });
//     });
  
// };
// Update a Credit by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  Credit.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Credit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Credit with id=${id}. Maybe Credit was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Credit with id=" + id
      });
    });
};
// Delete a Credit with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Credit.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Credit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Credit with id=${id}. Maybe Credit was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Credit with id=" + id
      });
    });
  
};
// Delete all Credits from the database.
exports.deleteAll = (req, res) => {
    Credit.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Credits were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Credits."
          });
        });
  
};
// Find all published Credits
// exports.findAllPublished = (req, res) => {
//     Credit.findAll()
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Credits."
//       });
//     });
// };