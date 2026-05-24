# Industrial Monitoring Dashboard

A real-time industrial monitoring dashboard built using Node.js, Express.js, HTML, CSS, and JavaScript.

The dashboard simulates machine monitoring in a smart factory environment by displaying live machine metrics, alerts, OEE analytics, production statistics, and trend charts.

---

# Project Overview

This project was developed as part of a technical internship assessment to demonstrate:

- Frontend UI/UX development
- Backend API development
- Real-time dashboard architecture
- REST API integration
- Modular code structure
- Problem-solving and debugging skills

The dashboard simulates an industrial control room where operators can monitor machine health and production metrics in real-time.

---

# Features

## Real-Time Monitoring

- Live machine status tracking
- Temperature monitoring
- Vibration monitoring
- OEE monitoring
- Production tracking

## Dynamic Dashboard

- Live KPI cards
- Dynamic charts
- Real-time alerts
- OEE analytics section
- Production overview

## Alerts System

Automatic alerts generated for:

- High temperature
- High vibration
- Low OEE
- Machine stopped

## Analytics

- OEE overview
- Availability
- Performance
- Quality metrics
- Production charts
- Trend analysis

## CSV Export

- Export machine data as CSV

## Responsive UI

- Desktop responsive design
- Clean industrial dark theme
- Modern dashboard layout

---

# Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Chart.js
- Lucide Icons

## Backend

- Node.js
- Express.js
- REST APIs

---

# Project Architecture

## Frontend Responsibilities

The frontend is responsible for:

- Rendering dashboard UI
- Fetching API data
- Updating charts dynamically
- Displaying alerts
- Rendering machine analytics

## Backend Responsibilities

The backend is responsible for:

- Generating machine data
- Simulating industrial metrics
- Managing REST APIs
- Processing alerts
- Calculating summary analytics

# REST APIs Used

## 1. Machine Data API

```http
GET /api/machines
```

Returns:

- Machine temperature
- Vibration
- OEE
- Production
- Machine status

---

## 2. Alerts API

```http
GET /api/alerts
```

Returns:

- High temperature alerts
- High vibration alerts
- Low OEE alerts
- Machine stopped alerts

---

## 3. Summary API

```http
GET /api/summary
```

Returns:

- Machines online
- Total production
- Average OEE
- Utilization
- Availability
- Performance
- Quality

---

# How Real-Time Updates Work

The dashboard uses polling to simulate real-time industrial monitoring.

Frontend fetches updated backend data every 3 seconds using:

```javascript
setInterval()
```

This updates:

- KPI cards
- Charts
- Alerts
- OEE analytics
- Machine metrics

---

# Libraries & Tools Used

| Tool | Purpose |
|------|----------|
| Express.js | Backend server |
| Chart.js | Charts & analytics |
| Lucide Icons | Dashboard icons |
| Live Server | Frontend hosting |
| GitHub | Version control |

---

# Challenges Faced

## 1. Frontend-Backend Integration

Connecting REST APIs with frontend UI updates dynamically.

## 2. Real-Time Dashboard Logic

Implementing polling-based live updates without page refresh.

## 3. Dynamic Alert Generation

Automatically generating alerts based on machine thresholds.

## 4. Chart Synchronization

Synchronizing charts with live backend data updates.

## 5. Modular Backend Structure

Separating backend logic into routes and reusable modules.

---

# Future Improvements

Possible future enhancements:

- WebSocket integration
- Database integration (MongoDB/PostgreSQL)
- User authentication
- Historical analytics
- Machine learning predictions
- Real IoT sensor integration
- Cloud deployment
- Advanced filtering
- Multi-user dashboard

---

# How to Run the Project

## 1. Clone Repository

```bash
git clone https://github.com/romamishra30/industrial-monitoring-dashboard.git
```

---

## 2. Open Project

```bash
cd industrial-monitoring-dashboard
```

---

# Backend Setup

## 1. Go to Backend Folder

```bash
cd Backend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start Backend Server

```bash
node server.js
```

Server runs on:

```bash
http://localhost:3000
```


# Screenshots


<img width="1895" height="909" alt="image" src="https://github.com/user-attachments/assets/ca0de9a8-bf01-4314-ba6e-c59718223d37" />
<img width="1885" height="911" alt="image" src="https://github.com/user-attachments/assets/78a568b9-acb4-4cf7-9711-c964ceb946ee" />



---

# Learning Outcomes

Through this project, I learned:

- REST API architecture
- Frontend-backend communication
- Real-time dashboard design
- Polling mechanisms
- Modular backend development
- Data visualization
- UI/UX dashboard principles

---


# License

This project was created for educational and internship assessment purposes.
