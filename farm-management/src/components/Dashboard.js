import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  // Sample Data for Charts
  const cropData = {
    labels: ["Corn", "Wheat", "Soybean"],
    datasets: [
      {
        label: "Yield (Tons)",
        data: [30, 45, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const livestockData = {
    labels: ["Cows", "Sheep", "Chickens"],
    datasets: [
      {
        data: [10, 25, 100],
        backgroundColor: ["#4CAF50", "#FF9800", "#9C27B0"],
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Farm Dashboard</h2>

      {/* Crop Yield Chart */}
      <div className="row">
        <div className="col-md-6">
          <h4>Crop Yield</h4>
          <Bar data={cropData} />
        </div>

        {/* Livestock Pie Chart */}
        <div className="col-md-6">
          <h4>Livestock Count</h4>
          <Pie data={livestockData} />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row mt-4">
        <div className="col-md-3 bg-success text-white p-3 rounded">
          <h5>Weather</h5>
          <p>🌤 27°C | Sunny</p>
        </div>
        <div className="col-md-3 bg-info text-white p-3 rounded">
          <h5>Ongoing Tasks</h5>
          <p>5 Active</p>
        </div>
        <div className="col-md-3 bg-warning text-dark p-3 rounded">
          <h5>Inventory</h5>
          <p>Fertilizer: Low</p>
        </div>
        <div className="col-md-3 bg-danger text-white p-3 rounded">
          <h5>Alerts</h5>
          <p>No recent alerts</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
