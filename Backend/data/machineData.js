function getMachines() {
  return [
    {
      id: 1,
      status: "Running",
      temperature: +(Math.random() * (70 - 60) + 60).toFixed(1),
      vibration: +(Math.random() * (2.5 - 1.5) + 1.5).toFixed(1),
      oee: Math.floor(Math.random() * (94 - 85) + 85),
      production: Math.floor(Math.random() * (1400 - 1150) + 1150)
    },
    {
      id: 2,
      status: "Running",
      temperature: +(Math.random() * (70 - 60) + 60).toFixed(1),
      vibration: +(Math.random() * (2.5 - 1.5) + 1.5).toFixed(1),
      oee: Math.floor(Math.random() * (94 - 85) + 85),
      production: Math.floor(Math.random() * (1400 - 1150) + 1150)
    },
    {
      id: 3,
      status: "Warning",
      temperature: +(Math.random() * (82 - 74) + 74).toFixed(1),
      vibration: +(Math.random() * (5 - 4) + 4).toFixed(1),
      oee: Math.floor(Math.random() * (78 - 70) + 70),
      production: Math.floor(Math.random() * (1050 - 850) + 850)
    },
    {
      id: 4,
      status: "Stopped",
      temperature: 0,
      vibration: 0,
      oee: 0,
      production: 0
    },
    {
      id: 5,
      status: "Warning",
      temperature: +(Math.random() * (82 - 74) + 74).toFixed(1),
      vibration: +(Math.random() * (5 - 4) + 4).toFixed(1),
      oee: Math.floor(Math.random() * (78 - 70) + 70),
      production: Math.floor(Math.random() * (1050 - 850) + 850)
    }
  ];
}

module.exports = getMachines;