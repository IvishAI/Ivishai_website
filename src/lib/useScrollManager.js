import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On navigation: scroll to the #hash target if present (retrying until it
 * mounts, e.g. lazy pages), otherwise scroll to top. Used by every page shell
 * so anchor links like /sera#pricing and /verbx#industries work everywhere.
 */
export default function useScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let tries = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries++ < 12) {
          setTimeout(tryScroll, 60);
        }
      };
      tryScroll();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}
