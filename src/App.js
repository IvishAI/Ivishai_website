import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import LoadingPage from "./pages/loadingpage"; 

import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import InternshipsStudentPrograms from "./pages/Careers/internships-student-programs";
import SoftwareEngineering from "./pages/Careers/Software/softwareengineering";
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
import VerbX from "./pages/Products/VerbX-Docs";
import Card from "./components/ui/card";
import Button from "./components/ui/button";
import Input from "./components/ui/input";
import Badge from "./components/ui/badge";
import DeveloperPage from "./pages/Developerpage";
import ProductsComingSoon from "./components/ComingUp";
import WhyIvish from "./components/WhyIvish";


// Lazy loaded 
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const EarlyAccess = lazy(() => import("./pages/header/EarlyAccess"));
const About = lazy(() => import("./pages/header/About"));
const Careers = lazy(() => import("./pages/Careers/Careers"));
const Contact = lazy(() => import("./pages/header/Contact"));
const UnitySensePage = lazy(() => import("./pages/Products/UnitySensePage"));
const LinguaFlowPage = lazy(() => import("./pages/Products/LinguaFlowPage"));
const Login = lazy(() => import("./pages/Careers/Login"));
const Signup = lazy(() => import("./pages/Careers/Signup"));
const Profile = lazy(() => import("./pages/Careers/Profile"));
const JobApplicationForm = lazy(() => import("./pages/Careers/JobApplicationForm"));
const AiMlJobs = lazy(() => import("./pages/Careers/aiml/AiMlJobs"));
const FrontendDeveloper = lazy(() => import("./pages/Careers/Software/FrontendDeveloper"));
const BackendEngineer = lazy(() => import("./pages/Careers/Software/BackendEngineer"));
const AiResearchScientist = lazy(() => import("./pages/Careers/aiml/AiResearchScientist"));
const MachineLearningEngineer = lazy(() => import("./pages/Careers/aiml/MachineLearningEngineer"));
const ComputerVisionEngineer = lazy(() => import("./pages/Careers/aiml/ComputerVisionEngineer"));
const NlpResearcher = lazy(() => import("./pages/Careers/aiml/NlpResearcher"));



function App() {
  return (
    <Router>


<Suspense fallback={<LoadingPage />}> 

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/unitysensepage" element={<UnitySensePage />} />
            <Route path="/linguaflowpage" element={<LinguaFlowPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobapplicationform" element={<JobApplicationForm />} />
            <Route path="/aimljobs" element={<AiMlJobs />} />
            <Route path="/internships-student-programs" element={<InternshipsStudentPrograms />} />
            <Route path="/softwareengineering" element={<SoftwareEngineering />} />
            <Route path="/frontenddeveloper" element={<FrontendDeveloper />} />
            <Route path="/backendengineer" element={<BackendEngineer />} />
            <Route path="/ai-research-scientist" element={<AiResearchScientist />} />
            <Route path="/machine-learning-engineer" element={<MachineLearningEngineer />} />
            <Route path="/computer-vision-engineer" element={<ComputerVisionEngineer />} />
            <Route path="/nlp-researcher" element={<NlpResearcher />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />

            <Route path="/Blog" element={<Blog />} />
            <Route path="/ai-transforming-industries" element={<AiTransformingIndustries />} />
            <Route path="/ai-healthcare" element={<AiHealthcare />} />
            <Route path="/ai-wearables" element={<AiWearables />} />
            <Route path="/cloud-computing" element={<CloudComputing />} />
            <Route path="/cybersecurity-ai" element={<CybersecurityAi />} />
            <Route path="/deep-learning" element={<DeepLearning />} />
            <Route path="/legal" element={<Legal/>} />
            <Route path="/responsibledisclosure" element={<ResponsibleDisclosure />} />
            <Route path="/security" element={<Security />} />
            <Route path="/compliance" element={<Compliance/>} />
            <Route path="/cookie-preferences" element={<CookiesPreference/>} />
            <Route path="/privacychoices" element={<PrivacyChoices/>} />
            <Route path="/verbx-docs" element={<VerbX />} />
            <Route path="/card" element={<Card />} />
            <Route path="/button" element={<Button />} />
            <Route path="/input" element={<Input />} />
            <Route path="/badge" element={<Badge />} />
            <Route path="/developerpage" element={<DeveloperPage />} />
            <Route path="/coming-soon" element={<ProductsComingSoon />} />
            <Route path="/whyivish" element={<WhyIvish />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
    </Router>

  );
}

export default App;
