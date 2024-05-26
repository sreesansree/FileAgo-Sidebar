import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const links = [
    { path: "/home", label: "Home" },
    { path: "/schedule", label: "Schedule" },
    { path: "/articles", label: "Articles" },
    { path: "/saved", label: "Saved" },
    { path: "/payment", label: "Payment" },
  ];
  const filteredLinks = links.filter((link) =>
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const getPageName = (path) => {
  //   const pageName = path.substring(1); // Remove the leading slash
  //   return pageName.charAt(0).toUpperCase() + pageName.slice(1); // Capitalize the first letter
  // };

  return (
    <div className={`sidebar ${blur ? "blur-background" : ""}`}>
      <h2>Learner</h2>
      <input
        type="text"
        placeholder="Discover"
        className="search-bar"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <p style={{ color: "gray", width: 10, height: 10 }}>MENU</p>
      <ul>
        {filteredLinks.map((link, index) => (
          <li
            key={index}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      {/* <p>You came from: {getPageName(location.pathname)}</p> */}
    </div>
  );
}
