const trendCtx = document.getElementById("trendChart");
const productionCtx = document.getElementById("productionChart");

const chartGridColor = "rgba(255, 255, 255, 0.06)";
const tickColor = "#94a3b8";

const trendChart = new Chart(trendCtx, {
  type: "line",
  data: {
    labels: ["09:24", "09:34", "09:44", "09:54", "10:04", "10:14", "10:24"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [68, 72, 70, 73, 69, 71, 77],
        borderColor: "#ef4444",
        backgroundColor: "transparent",
        borderWidth: 2.5,
        tension: 0.45,
        pointRadius: 0,
        pointHoverRadius: 5,
        yAxisID: "y",
      },
      {
        label: "Vibration (mm/s)",
        data: [6, 5, 6, 5.5, 6.2, 5.8, 6],
        borderColor: "#2563eb",
        backgroundColor: "transparent",
        borderWidth: 2.5,
        tension: 0.45,
        pointRadius: 0,
        pointHoverRadius: 5,
        yAxisID: "y1",
      },
      {
        label: "OEE (%)",
        data: [84, 86, 85, 87, 84, 86, 85],
        borderColor: "#22c55e",
        backgroundColor: "transparent",
        borderWidth: 2.5,
        tension: 0.45,
        pointRadius: 0,
        pointHoverRadius: 5,
        yAxisID: "y1",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      intersect: false,
      mode: "index",
    },

    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          color: "#cbd5e1",
          usePointStyle: true,
          pointStyle: "line",
          boxWidth: 35,
          boxHeight: 2,
          padding: 18,
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#ffffff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(148, 163, 184, 0.2)",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
      },
    },

    scales: {
      x: {
        ticks: {
          color: tickColor,
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          color: chartGridColor,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        min: 0,
        max: 100,
        position: "left",
        ticks: {
          color: tickColor,
          stepSize: 25,
        },
        title: {
          display: true,
          text: "Temperature (°C)",
          color: tickColor,
          font: {
            size: 12,
            weight: "600",
          },
        },
        grid: {
          color: chartGridColor,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },

      y1: {
        min: 0,
        max: 100,
        position: "right",
        ticks: {
          color: tickColor,
          stepSize: 25,
        },
        title: {
          display: true,
          text: "Vibration (mm/s) / OEE (%)",
          color: tickColor,
          font: {
            size: 12,
            weight: "600",
          },
        },
        grid: {
          drawOnChartArea: false,
        },
        border: {
          display: false,
        },
      },
    },
  },
});

const productionChart = new Chart(productionCtx, {
  type: "bar",
  data: {
    labels: [
      "00:00", "02:00", "04:00", "06:00", "08:00", "10:00",
      "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"
    ],
    datasets: [
      {
        label: "Production",
        data: [850, 1050, 1280, 1500, 1650, 1600, 1550, 1450, 1320, 1400, 1550, 1250],
        backgroundColor: "#2563eb",
        borderRadius: 2,
        barThickness: 10,
        categoryPercentage: 0.75,
        barPercentage: 0.7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#ffffff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(148, 163, 184, 0.2)",
        borderWidth: 1,
        padding: 10,
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 11,
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        min: 0,
        max: 2000,
        ticks: {
          color: "#94a3b8",
          stepSize: 1000,
          callback: value => value === 0 ? "0" : value / 1000 + "K",
          font: {
            size: 11,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.08)",
          borderDash: [4, 4],
        },
        border: {
          display: false,
        },
      },
    },
  },
});

function updateCharts() {
  if (!latestMachines || latestMachines.length === 0) return;

  const machineOne = latestMachines.find(machine => machine.id === 1);
  if (!machineOne) return;

  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  trendChart.data.labels.push(now);
  trendChart.data.datasets[0].data.push(machineOne.temperature);
  trendChart.data.datasets[1].data.push(machineOne.vibration);
  trendChart.data.datasets[2].data.push(machineOne.oee);

  if (trendChart.data.labels.length > 7) {
    trendChart.data.labels.shift();
    trendChart.data.datasets.forEach(dataset => dataset.data.shift());
  }

  trendChart.update("none");

  productionChart.data.datasets[0].data.shift();
  productionChart.data.datasets[0].data.push(machineOne.production);

  productionChart.update("none");
}

setInterval(updateCharts, 3000);