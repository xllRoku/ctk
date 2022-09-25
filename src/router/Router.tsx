import { LocationProps } from "@/interface/LocationProps";
import Layout from "@/layouts/primary_layout/Layout";
import Home from "@/pages/home/Home";
import Account from "@/pages/login/Account";
import QuoteForm from "@/pages/quote/components/quote_form/QuoteForm";
import Quote from "@/pages/quote/Quote";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = ({ location, setLocation }: LocationProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout location={location} setLocation={setLocation} />}
        >
          <Route
            path={`account/:path`}
            element={<Account location={location} setLocation={setLocation} />}
          />
          <Route path="quote/:path" element={<QuoteForm />} />
          <Route path="quote" element={<Quote />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
