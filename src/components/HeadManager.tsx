import React, { useEffect } from "react";
import { useLocation } from "react-router";

interface HeadManagerProps {
  title?: string;
  favicon?: string;
}

const HeadManager: React.FC<HeadManagerProps> = ({ title, favicon }) => {
  const location = useLocation();
  useEffect(() => {
    // Update the document title if provided
    if (title) {
      document.title = title;
    }

    // Update the favicon if provided
    if (favicon) {
      let link: HTMLLinkElement | null =
        document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = favicon;
    }
  }, [title, favicon, location]);

  return null; // This component doesn't render anything visible
};

export default HeadManager;
