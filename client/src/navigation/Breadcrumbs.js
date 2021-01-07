import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { pathTo } from "./utils";

const Breadcrumbs = ({ route }) => {
  const location = useLocation();

  const currentPath = location.pathname;

  const formattedPath = currentPath.slice(1).split("/");

  let allVisitedPaths = [];

  if (!!formattedPath.length) {
    formattedPath.forEach((_, index) =>
      allVisitedPaths.push(formattedPath.slice(0, index + 1).join("/"))
    );
  }

  return (
    <nav className="breadcrumbs">
      {pathTo(route).map((crumb, index, breadcrumbs) => {
        return (
          <div key={index} className="item">
            {index < breadcrumbs.length - 1 && (
              <NavLink
                to={index > 0 ? `/${allVisitedPaths[index - 1]}` : crumb.path}
              >
                {crumb.label}
              </NavLink>
            )}
            {index === breadcrumbs.length - 1 && crumb.label}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
