import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import {
  AboutUs,
  BusSearch,
  ContactUs,
  HomePage,
  MyAccount,
  Search,
  ViewTicket,
} from "../components/sections";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/bus-search" element={<BusSearch />} />
      <Route path="/view-ticket" element={<ViewTicket />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default Routers;
