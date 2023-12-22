import React, { useEffect, useRef } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

const Navbar: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const personalRef = useRef<HTMLAnchorElement>(null);
  const empRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (
      location.pathname === `/${id}` ||
      location.pathname === `/${id}/personal`
    ) {
      empRef.current!.className = "";
      personalRef.current!.className = "active";
    } else if (
      location.pathname === `/${id}/employment` ||
      location.pathname === `/${id}/all`
    ) {
      empRef.current!.className = "active";
      personalRef.current!.className = "";
    } else {
      personalRef.current!.className = "";
      empRef.current!.className = "";
    }
  }, [location]);

  return (
    <div className="tabs">
      <NavLink to={`/`}>
        <p>Home</p>
      </NavLink>
      <div className="allTabs">
        <NavLink ref={personalRef} to={`/${id}/personal`}>
          <p>Personal</p>
        </NavLink>
        <NavLink to={`/${id}/professional`}>
          <p>Professional</p>
        </NavLink>
        <NavLink to={`/${id}/academic`}>
          <p>Academic</p>
        </NavLink>
        <NavLink ref={empRef} to={`/${id}/employment`}>
          <p>Employment</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
