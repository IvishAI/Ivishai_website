import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { readConsent } from "./lib/consent";

const GATracker = () => {
  const location = useLocation();

  useEffect(() => {
    // nothing is reported for a visitor who has not agreed to it
    if (!readConsent().analytics) return;
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default GATracker;
