import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import { Context } from "../../context/store";

function MainRouter() {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    let user_data = localStorage.getItem("user_data");
    user_data = JSON.parse(user_data);
    dispatch({ type: "UPDATE_USER_DATA", user_data: user_data });
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<AppRouter />} />
    </Routes>
  );
}

export default MainRouter;
