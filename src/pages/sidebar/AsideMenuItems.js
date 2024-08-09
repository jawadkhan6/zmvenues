import React from "react";

export default function AsideMenuItems({ icon, title }) {
  return (
    <>
      <li className="d-flex gap-3 align-items-center pb-4">
        <img src={icon} alt="" />
        <a href="" className="text-gray">
          {title}
        </a>
      </li>
    </>
  );
}
