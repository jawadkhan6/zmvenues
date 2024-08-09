import React from "react";
import { NavLink } from "react-router-dom";

export default function AsideMenuItems({ icon, title, to }) {
  return (
    <>
      <li className="d-flex gap-3 align-items-center pb-4">
        <img src={icon} alt="" />
        <NavLink to={to} className="text-gray">
          {title}
        </NavLink>
      </li>
    </>
  );
}
