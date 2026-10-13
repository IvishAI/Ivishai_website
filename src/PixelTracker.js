import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { readConsent } from "./lib/consent";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // nothing is reported for a visitor who has not agreed to it
    if (!readConsent().analytics) return;
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

export default PixelTracker;
