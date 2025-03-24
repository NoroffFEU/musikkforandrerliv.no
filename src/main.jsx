import { StrictMode } from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
// import CMS from "decap-cms";

import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './index.css';

// // Initialize the CMS object
// CMS.init(
//   {
//     config: {
//       backend: {
//         name: 'git-gateway',
//       },
//       load_config_file: false,
//       media_folder: "public/images/uploads",
//       public_folder: "/images/uploads",
//       collections: [
//         { label: "Blog", name: "blog", folder: "_posts/blog", create: true, fields: [
//           { label: "Title", name: "title", widget: "string" },
//           { label: "Publish Date", name: "date", widget: "datetime" },
//           { label: "Featured Image", name: "thumbnail", widget: "image" },
//           { label: "Body", name: "body", widget: "markdown" },
//         ]},
//       ],
//     },
//   }
// );
// CMS.registerPreviewTemplate("my-template", MyTemplate);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Auth0Provider
      clientId={import.meta.env.AUTH0_CLIENT_ID}
      domain={import.meta.env.AUTH0_DOMAIN}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    > */}
      <App />
    {/* </Auth0Provider> */}
  </StrictMode>,
);
// Now the registry is available via the CMS object.
