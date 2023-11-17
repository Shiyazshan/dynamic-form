import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../screens/Home";
import CreateForm from "../../includes/CreateForm";
import ViewForm from "../../includes/ViewForm";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateForm />} />
      <Route path="/view" element={<ViewForm />} />
    </Routes>
  );
}

export default AppRouter;
