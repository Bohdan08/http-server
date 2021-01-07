import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import routes from "./routes";
import { generateAppRoutes } from "./navigation/utils";

// styles
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const appRoutes = generateAppRoutes(routes);

ReactDOM.render(<App routes={appRoutes} />, document.getElementById("root"));
