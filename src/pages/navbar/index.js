import React from "react";

function Header() {
  return (
    <>
      <div className="main_header d-flex flex-column justify-content-center px-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-blue fw-semibold">My Venues</h3>
          <div className="d-flex align-items-center gap-3">
            <img src="/images/setting-ico.svg" alt="" />
            <img src="/images/logout-ico.svg" alt="" />
            <div className="profile-symbol">
              <img
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww"
                alt=""
                className="symbol-img"
              />
            </div>
            <h5 className="mb-0">John Nadar</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
