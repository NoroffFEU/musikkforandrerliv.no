import { useEffect, useRef } from "react";

export default function AdminCMS() {
  const bootedRef = useRef(false);

  useEffect(() => {

    // Normalize /admin path to /admin/# to avoid issues with routing
    const path = window.location.pathname.replace(/\/+$/, '');
    if (path === "/admin") {
      const h = window.location.hash;

      if (h === "" || h === "#/") {
        window.history.replaceState(null, "", "/admin/#");
    }
  }
    
    // Guard against StrictMode double effects.
    if (bootedRef.current || window.__DECAP_BOOTED__) return;
    bootedRef.current = true;
    window.__DECAP_BOOTED__ = true;

    (async () => {
      try {
        const mod = await import("decap-cms-app"); 
        const CMS = mod.default || mod;

        CMS.init({ load_config_file: true });
      } catch (err) {
        console.error("Failed to boot Decap CMS:", err);
      }
    })();

    return () => { /* noop */ };
  }, []);


  return null;
}




