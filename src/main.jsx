import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
} from "react-router-dom";
import App from "./App.jsx";
import { NavigationHistoryProvider } from "./store/NavigationHistoryContex.jsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavigationHistoryProvider>
        <App />
      </NavigationHistoryProvider>
    </Router>
  </React.StrictMode>
);
