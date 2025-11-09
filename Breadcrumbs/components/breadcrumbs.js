import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  console.log(pathnames);
  let breadcrumbs = "";
  return (
    <div className="breadcrumbs">
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        breadcrumbs += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span>/ {name}</span>
        ) : (
          <span key={breadcrumbs}>
            /
            <Link key={breadcrumbs} to={breadcrumbs}>
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};
export default Breadcrumbs;
