const express = require("express");

const router = express.Router();

const getMachines = require("../data/machineData");

router.get("/", (req, res) => {

  const machines = getMachines();

  const alerts = [];

  machines.forEach(machine => {

    if (machine.temperature > 78) {
      alerts.push({
        type: "critical",
        message: "High Temperature",
        machine: `Machine ${machine.id}`
      });
    }

    if (machine.vibration > 4) {
      alerts.push({
        type: "warning",
        message: "High Vibration",
        machine: `Machine ${machine.id}`
      });
    }

    if (machine.oee < 75 && machine.status !== "Stopped") {
      alerts.push({
        type: "warning",
        message: "Low OEE",
        machine: `Machine ${machine.id}`
      });
    }

    if (machine.status === "Stopped") {
      alerts.push({
        type: "critical",
        message: "Machine Stopped",
        machine: `Machine ${machine.id}`
      });
    }

  });

  res.json(alerts);

});

module.exports = router;