// components/RouteLoader.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

export default function RouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // next paint ke baad loader hata do
    const id = requestAnimationFrame(() => {
      setLoading(false);
    });

    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return loading ? <PageLoader /> : null;
}
