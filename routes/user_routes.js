const express = require("express");
const router = express.Router();
const db = require("../models");

//rest API that will create a user in the system
router.post("/new", (req, res) => {
  db.User.create({
    id: req.body.id,
    type: req.body.type,
  }).then((user) => res.send(user));
});

//rest API that will delete one user if it's called and the user email is empty in the system,
// it means the user will not be deleted if the email is not empty
router.get("/find/:id", (req, res) => {
  db.User.findAll({
    include: [db.Profile],
    where: {
      id: req.params.id,
    },
  }).then((user) => {
    if (user[0].Profile.email.length === 0) {
      db.User.destroy({
        where: {
          id: req.params.id,
        },
      }).then(() => res.send("user deleted"));
    } else {
      res.send(user);
    }
  });
});

router.get("/all", (req, res) => {
  db.User.findAll({
    include: [db.Profile],
  }).then((allUsers) => res.send(allUsers));
});

//rest API that will get all the users with a specific type
router.get("/find/:type", (req, res) => {
  db.User.findAll({
    include: [db.Profile],
    where: {
      type: req.params.type,
    },
  }).then((specificUsers) => res.send(specificUsers));
});

module.exports = router;
