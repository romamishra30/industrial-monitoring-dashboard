let latestMachines = [];

// =========================
// LIVE CLOCK
// =========================
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();

  document.getElementById("liveTime").textContent = time;
  document.getElementById("sidebarTime").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

// =========================
// OEE MINI BAR UPDATE
// =========================
function updateOeeBar(machineId, oee) {
  const text = document.getElementById(`m${machineId}OeeText`);
  const bar = document.getElementById(`m${machineId}OeeBar`);

  if (!text || !bar) return;

  text.textContent = `${oee}%`;
  bar.style.width = `${oee}%`;

  bar.classList.remove("green-fill", "yellow-fill", "red-fill");

  if (oee >= 80) {
    bar.classList.add("green-fill");
  } else if (oee >= 60) {
    bar.classList.add("yellow-fill");
  } else {
    bar.classList.add("red-fill");
  }
}

// =========================
// FETCH MACHINE DATA
// =========================
async function fetchMachineData() {
  try {
    const response = await fetch("http://localhost:3000/api/machines");
    const machines = await response.json();

    latestMachines = machines;

    machines.forEach((machine) => {
      document.getElementById(`m${machine.id}Temp`).textContent =
        `${machine.temperature} °C`;

      document.getElementById(`m${machine.id}Vibration`).textContent =
        `${machine.vibration} mm/s`;

      updateOeeBar(machine.id, machine.oee);

      document.getElementById(`m${machine.id}Production`).textContent =
        machine.production;
    });
  } catch (error) {
    console.log("Error fetching machine data:", error);
  }
}

fetchMachineData();
setInterval(fetchMachineData, 3000);

// =========================
// FETCH ALERTS
// =========================
async function fetchAlerts() {
  try {
    const response = await fetch("http://localhost:3000/api/alerts");
    const alerts = await response.json();

    const alertsList = document.getElementById("alertsList");
    alertsList.innerHTML = "";

    alerts.forEach((alert) => {
      const iconName =
        alert.type === "critical" ? "circle-alert" : "triangle-alert";

      const badgeClass = alert.type === "critical" ? "critical" : "warning";

      alertsList.innerHTML += `
        <div class="alert-item">
          <div class="alert-left">
            <i class="alert-icon ${badgeClass}" data-lucide="${iconName}"></i>

            <div class="alert-info">
              <h4>${alert.message}</h4>
              <p>${alert.machine}</p>
            </div>
          </div>

          <div class="alert-right">
            <span>
              ${new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>

            <span class="badge ${badgeClass}">
              ${alert.type}
            </span>
          </div>
        </div>
      `;
    });

    lucide.createIcons();
  } catch (error) {
    console.log("Error fetching alerts:", error);
  }
}

fetchAlerts();
setInterval(fetchAlerts, 3000);

// =========================
// FETCH SUMMARY DATA
// =========================
function updateSummaryBar(barId, value) {
  const bar = document.getElementById(barId);

  if (!bar) return;

  bar.style.width = `${value}%`;
}

async function fetchSummary() {
  try {
    const response = await fetch("http://localhost:3000/api/summary");
    const summary = await response.json();

    document.getElementById("machinesOnlineValue").innerHTML =
      `${summary.machinesOnline} <span>/ ${summary.totalMachines}</span>`;

    document.getElementById("totalProductionValue").textContent =
      summary.totalProduction.toLocaleString();

    document.getElementById("averageOeeValue").textContent =
      `${summary.averageOee}%`;

    document.getElementById("activeAlertsValue").textContent =
      summary.activeAlerts;

    document.getElementById("utilizationValue").textContent =
      `${summary.utilization}%`;

    document.getElementById("oeeCircleValue").textContent =
      `${summary.averageOee}%`;

    document.getElementById("availabilityValue").textContent =
      `${summary.availability}%`;

    document.getElementById("performanceValue").textContent =
      `${summary.performance}%`;

    document.getElementById("qualityValue").textContent =
      `${summary.quality}%`;

    updateSummaryBar("availabilityBar", summary.availability);
    updateSummaryBar("performanceBar", summary.performance);
    updateSummaryBar("qualityBar", summary.quality);
  } catch (error) {
    console.log("Error fetching summary:", error);
  }
}

fetchSummary();
setInterval(fetchSummary, 3000);

// =========================
// EXPORT CSV
// =========================
function exportCSV() {
  if (latestMachines.length === 0) return;

  let csv = "Machine,Status,Temperature,Vibration,OEE,Production\n";

  latestMachines.forEach((machine) => {
    csv += `Machine ${machine.id},${machine.status},${machine.temperature},${machine.vibration},${machine.oee},${machine.production}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "machine-data.csv";
  a.click();

  URL.revokeObjectURL(url);
}

document.getElementById("exportCsvBtn").addEventListener("click", exportCSV);