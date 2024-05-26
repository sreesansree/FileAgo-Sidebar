import React from "react";
import { useNavigationHistory } from "../store/NavigationHistoryContex";

export default function Home() {
  const { history } = useNavigationHistory();

  const getPageName = (path) => {
    if (!path) return null; // Handle case when path is null or undefined
    const pageName = path.substring(1); // Remove the leading slash
    return pageName.charAt(0).toUpperCase() + pageName.slice(1); // Capitalize the first letter
  };
  const previousPage =
    history.length > 1 ? getPageName(history[history.length - 2]) : null;

  return (
    <div>
      <h1>Articles</h1>
      <p>Welcome to the Article page!</p>
      {previousPage && <p>You came from: {previousPage} </p>}
    </div>
  );
}
