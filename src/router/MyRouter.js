import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";

const MyRouter = () => {
  const PUBLIC_ROUTES = [{ link: "/", element: <Home />, id: 1 }];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}

        <Route element={<ProtectedRoutes />}>
          {ADMIN_ROUTES.map((el) => (
            <Route path={el.link} element={el.element} key={el.id} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default MyRouter;
