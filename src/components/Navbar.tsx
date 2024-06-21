import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className=" bg-orange-200">
      <div className="navbar align-text">
        <div className=" navbar-start">
          <Link className="btn btn-accent" href="/">
            Home
          </Link>
        </div>
        <div className=" navbar-center">
          <Link className="btn btn-ghost" href="/about">
            About
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact
          </Link>
          <Link className="btn btn-ghost" href="/price">
            Price
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
