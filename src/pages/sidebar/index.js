import React from "react";
import AsideMenuItems from "./AsideMenuItems";

function Sidebar() {
  return (
    <>
      <div className="p-3">
        <ul className="p-0 m-0">
          <AsideMenuItems icon={"/images/venu-ico.svg"} title={"My Venu"} />
          <AsideMenuItems icon={"/images/venu-ico.svg"} title={"My Events"} />
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
