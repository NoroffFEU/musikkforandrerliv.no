import CMS from "decap-cms";
import { useEffect } from "react";

function Admin() {
  useEffect(() => {
    CMS.init();
  }, []);

  return (<div id="nc-root"></div>);
};

export default Admin;
