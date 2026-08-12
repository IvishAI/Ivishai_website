import { useEffect } from "react";

/**
 * useSEO - sets document.title and <meta name="description"> per page.
 * Dependency-free (no react-helmet). Restores nothing on unmount because the
 * next page sets its own - SPA head management stays simple and predictable.
 *
 * @param {string} title        full document title
 * @param {string} description  meta description
 */
export default function useSEO(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
