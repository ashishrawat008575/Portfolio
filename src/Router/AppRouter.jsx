import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../Page/HomePage";
import AboutMePage from "../Page/AboutMePage";
import ContactMePage from "../Page/ContactMePage";
import ProjectPage from "../Page/ProjectPage";
import SkillPage from "../Page/SkillPage";
import Footer from "../components/Footer/Footer";
import WebDevChatbot from "../components/Chatbot/Chatbot";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillPage />} />
      </Routes>
      <WebDevChatbot/>
      <Footer />
    </>
  );
};

export default AppRouter;
