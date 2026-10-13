import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import LoadingPage from "./pages/loadingpage";

import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import Blog from "./pages/header/blog/Blog";
import AiTransformingIndustries from "./pages/header/blog/ai-transforming-industries";
import AiHealthcare from "./pages/header/blog/ai-healthcare";
import AiWearables from "./pages/header/blog/ai-wearables";
import CloudComputing from "./pages/header/blog/cloud-computing";
import CybersecurityAi from "./pages/header/blog/cybersecurity-ai";
import DeepLearning from "./pages/header/blog/deep-learning";
import Legal from "./pages/Footer/Legal";
import ResponsibleDisclosure from "./pages/Footer/ResponsibleDisclosure";
import Security from "./pages/Footer/Security";
import Compliance from "./pages/Footer/Compliance";
import CookiesPreference from "./pages/Footer/cookie-preferences";
import PrivacyChoices from "./pages/Footer/PrivacyChoices";
import DeveloperPage from "./pages/Developerpage";
import ProductsComingSoon from "./components/ComingUp";
import WhyIvish from "./components/WhyIvish";
import MoreFAQ from "./pages/morefaq";

// ✅ Trackers
import PixelTracker from "./PixelTracker";
import GATracker from "./GATracker";

// Lazy loaded
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/header/About"));
const Careers = lazy(() => import("./pages/Careers/Careers"));
const Contact = lazy(() => import("./pages/header/Contact"));
const StayUpdatedForm = lazy(() => import("./pages/Careers/StayUpdatedForm"));
const RetailOSOverview = lazy(
  () => import("./pages/RetailOS/RetailOSOverview"),
);
const RetailOSFeatures = lazy(
  () => import("./pages/RetailOS/RetailOSFeatures"),
);
const RetailOSIndustries = lazy(
  () => import("./pages/RetailOS/RetailOSIndustries"),
);
const RetailOSPricing = lazy(() => import("./pages/RetailOS/RetailOSPricing"));
const SeraPrivacyPolicy = lazy(
  () => import("./pages/RetailOS/SeraPrivacyPolicy"),
);
// LOCAL ONLY - the element sheet is gitignored; never commit this line.
const Elements = lazy(() => import("./pages/Elements"));

//"More" menu pages
const Collaboration = lazy(() => import("./pages/Collaboration"));
const Recognition = lazy(() => import("./pages/Recognition"));
const Government = lazy(() => import("./pages/Government"));
const Investors = lazy(() => import("./pages/Investors"));
const Patents = lazy(() => import("./pages/Patents"));

// Sera product site + VerbX hand-off intro
const Sera = lazy(() => import("./pages/sera/SeraHome"));
const SeraIndustry = lazy(() => import("./pages/sera/SeraIndustry"));
const ExploreVerbX = lazy(() => import("./pages/verbx/ExploreVerbX"));
const FounderDetail = lazy(() => import("./pages/header/FounderDetail"));

function App() {
  return (
    <Router>
      {/* ✅ Analytics (NO UI, just tracking) */}
      <PixelTracker />
      <GATracker />

      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:slug" element={<FounderDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/*"More" menu pages */}
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/government" element={<Government />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/patents" element={<Patents />} />

          {/* Sera product site */}
          <Route path="/sera" element={<Sera />} />
          <Route path="/sera/:slug" element={<SeraIndustry />} />

          {/* VerbX intro - globe animation, then hands off to verbxeco.com */}
          <Route path="/explore-verbx" element={<ExploreVerbX />} />

          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/Blog" element={<Blog />} />
          <Route
            path="/ai-transforming-industries"
            element={<AiTransformingIndustries />}
          />
          <Route path="/ai-healthcare" element={<AiHealthcare />} />
          <Route path="/ai-wearables" element={<AiWearables />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/cybersecurity-ai" element={<CybersecurityAi />} />
          <Route path="/deep-learning" element={<DeepLearning />} />
          <Route path="/legal" element={<Legal />} />
          <Route
            path="/responsibledisclosure"
            element={<ResponsibleDisclosure />}
          />
          <Route path="/security" element={<Security />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/cookie-preferences" element={<CookiesPreference />} />
          <Route path="/privacychoices" element={<PrivacyChoices />} />
          <Route path="/developerpage" element={<DeveloperPage />} />
          <Route path="/coming-soon" element={<ProductsComingSoon />} />
          <Route path="/whyivish" element={<WhyIvish />} />
          <Route path="/morefaq" element={<MoreFAQ />} />
          <Route path="/stay-updated" element={<StayUpdatedForm />} />

          <Route path="/retail-os" element={<RetailOSOverview />} />
          <Route path="/retail-os/features" element={<RetailOSFeatures />} />
          <Route
            path="/retail-os/industries"
            element={<RetailOSIndustries />}
          />
          <Route path="/retail-os/pricing" element={<RetailOSPricing />} />
          <Route path="/sera/privacypolicy" element={<SeraPrivacyPolicy />} />
          <Route path="/elements" element={<Elements />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
