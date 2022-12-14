import { LocationProps } from "@/interface/LocationProps";
import Layout from "@/layouts/primary_layout/Layout";
import Home from "@/pages/home/Home";
import Account from "@/pages/login/Account";
import PrivacyPolicy from "@/pages/privacy_policy/PrivacyPolicy";
import QuoteForm from "@/pages/quote/components/quote_form/QuoteForm";
import Quote from "@/pages/quote/Quote";
import SoftwarePrivacy from "@/pages/software_privacy/SoftwarePrivacy";
import TermsAndConditions from "@/pages/terms_and_conditions/TermsAndConditions";

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
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="software-privacy" element={<SoftwarePrivacy />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
