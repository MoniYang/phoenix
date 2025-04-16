import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "./styles/icon.css";
import { HashRouter } from "react-router-dom";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>,
);
