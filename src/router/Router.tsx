import { LocationProps } from "@/interface/LocationProps";
import Layout from "@/layouts/primary_layout/Layout";
import Home from "@/pages/home/Home";
import Account from "@/pages/login/Account";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = ({ location, setLocation }: LocationProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout location={location} setLocation={setLocation} />}
        >
          <Route index element={<Home />} />
          <Route
            path={`account/:path`}
            element={<Account location={location} setLocation={setLocation} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
