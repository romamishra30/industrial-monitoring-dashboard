const express = require("express");

const router = express.Router();

const getMachines = require("../data/machineData");

router.get("/", (req, res) => {
  const machines = getMachines();

  const machinesOnline = machines.filter(
    (machine) => machine.status !== "Stopped",
  ).length;

  const totalMachines = machines.length;

  const totalProduction = machines.reduce(
    (sum, machine) => sum + machine.production,
    0,
  );

  const averageOee =
    machines.reduce((sum, machine) => sum + machine.oee, 0) / totalMachines;

  const utilization = (machinesOnline / totalMachines) * 100;

  const summary = {
    machinesOnline,
    totalMachines,
    totalProduction,
    averageOee: averageOee.toFixed(1),
    activeAlerts: 3,
    utilization: utilization.toFixed(1),
    availability: +(Math.random() * (95 - 88) + 88).toFixed(1),
    performance: +(Math.random() * (92 - 84) + 84).toFixed(1),
    quality: +(Math.random() * (98 - 90) + 90).toFixed(1),
  };

  res.json(summary);
});

module.exports = router;
