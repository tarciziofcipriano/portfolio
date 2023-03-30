import { Route, Routes } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import AboutThePortfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";

import { HOME, ABOUT_ME, PORTFOLIO, PROJECTS, CONTACT } from "./constants";

const Router = () => (
  <Routes>
    <Route path={HOME} element={<Dashboard />} />
    <Route path={ABOUT_ME} element={<AboutMe />} />
    <Route path={PORTFOLIO} element={<AboutThePortfolio />} />
    <Route path={PROJECTS} element={<Projects />} />
    <Route path={CONTACT} element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
