import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

export default function RouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // to track latest timeout
  const timeoutRef = useRef(null);

  useEffect(() => {
    setLoading(true);

    // clear previous timeout (important for fast route changes)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // minimum loader time (ms)
    const MIN_LOADING_TIME = 1100; 

    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, MIN_LOADING_TIME);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return loading ? <PageLoader /> : null;
}
