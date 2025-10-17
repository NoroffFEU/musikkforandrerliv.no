import { useEffect, useRef } from "react";

export default function AdminCMS() {
  const bootedRef = useRef(false);

  useEffect(() => {
    if (bootedRef.current) return; // prevent double init in dev
    bootedRef.current = true;

    (async () => {
      try {
        
        const mod = await import("decap-cms-app");
        const CMS = mod.default || mod;

        CMS.init({
          load_config_file: true,
          config: {},
        });

       
      } catch (err) {
        console.error("[CMS] Failed to boot Decap CMS:", err);
      }
    })();
  }, []);

  return (
    <div
      id="nc-root"
      style={{
        minHeight: "100vh", // temporary fix for unstyled content
        display: "block",
      }}
    />
  );
}