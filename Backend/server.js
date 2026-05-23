const express = require("express");
const cors = require("cors");

const alertRoutes = require("./routes/alerts");
const machineRoutes = require("./routes/machine");
const summaryRoutes = require("./routes/summary");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/machines", machineRoutes);

app.use("/api/alerts", alertRoutes);

app.use("/api/summary", summaryRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Industrial Dashboard Backend Running");
});

// SERVER
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});