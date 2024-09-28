
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/InfoPage.css";

const InfoPage = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/faq":
        return <div><h2>FAQ</h2><p>Here are the frequently asked questions...</p></div>;
      case "/review":
        return <div><h2>Review</h2><p>Check out what our customers are saying...</p></div>;
      case "/privacy-policy":
        return <div><h2>Privacy Policy</h2><p>Learn how we protect your data...</p></div>;
      case "/terms-of-use":
        return <div><h2>Terms of Use</h2><p>Understand our terms and conditions...</p></div>;
      default:
        return <div><h2>Page Not Found</h2></div>;
    }
  };

  return <div className="info-page">{renderContent()}</div>;
};

export default InfoPage;
