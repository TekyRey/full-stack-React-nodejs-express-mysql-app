import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import Table from "./Table";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <h1>DashBoard</h1>
      </div>
      <Table />
    </div>
  );
}

export default Dashboard;
