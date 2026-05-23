const express = require("express");

const router = express.Router();

const getMachines = require("../data/machineData");

router.get("/", (req, res) => {


res.json(getMachines());

});

module.exports = router;
