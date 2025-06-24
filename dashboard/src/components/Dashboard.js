import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Holdings from "./Holdings";
import Funds from "./Funds";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";


const Dashboard = () => {
  return (
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds/>}/>
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
  );
};

export default Dashboard;