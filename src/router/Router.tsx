// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/layouts";
import { Home } from "@/pages";
import { Login } from "@/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
