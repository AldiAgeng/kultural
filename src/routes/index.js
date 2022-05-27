import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home, Destinations, Login } from "../pages";
import { MainDashboard, DestinationsDashboard, UsersDashboard, CreateDestinations, EditDestinations, CreateUsers, EditUsers } from "../pages/dashboard";
export default function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/dashboard/destinations" element={<DestinationsDashboard />} />
        <Route path="/dashboard/users" element={<UsersDashboard />} />
        <Route path="/dashboard/destinations/create" element={<CreateDestinations />} />
        <Route path="/dashboard/destinations/edit" element={<EditDestinations />} />
        <Route path="/dashboard/users/create" element={<CreateUsers />} />
        <Route path="/dashboard/users/edit" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
}
