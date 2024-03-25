import React from "react";
import { navData } from "../../constants/data";

const Navbar = () => {
  return (
    <div
      className="d-flex justify-content-between"
      style={{ margin: "55px 130px 0 130px" }}
    >
      {navData.map((data) => (
        <div className="pt-3 px-1 text-center">
          <img src={data.url} alt="nav-img" style={{ width: "64px" }} />
          <p
            className=""
            style={{
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "inherit",
            }}
          >
            {data.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
