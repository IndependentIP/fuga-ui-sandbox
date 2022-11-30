import { Typography } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { ComponentsGallery } from "./components-gallery";
import { Layout } from "./layout";

const App = () => (
  <Layout>
    <ComponentsGallery />
  </Layout>
);

ReactDOM.render(

  <App />,
  document.getElementById("root")
);

