import Link from "next/link";
import React, { useState, useRef } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Home", 
    href: "/" },
    { text: "Collection", 
        href: "/collection" },
    { text: "Submit", 
        href: "/submit" },
];

const Navbar = () => {

  const [navActive, setNavActive] = useState(null);
  const [activeId, setActiveId] = useState(-1);

  return (
    <header>
      <nav
        className={`nav ${
          navActive ? "active" : ""
        }
        `}
      >
        
        <h1>
          <Link href={"/"}
          className="logo">
            <a onClick={() => 
              { setActiveId(-1);
                document.getElementById('logo-ext').innerHTML = '';
              }
            }>
              Fly High Ry
            </a>
          </Link>
          <span id="logo-ext"></span>
        </h1>
        
        {/* old nav logo */}
        {/* <Link href={"/"}>
          <a onClick={() => setActiveId(-1)}>
            <h1 id="logo">Fly High Ry</h1>
          </a>
        </Link> */}

        <div className={`nav-items ${navActive ? "active" : ""}`}>
            {MENU_LIST.map((menu, id) => (
                <div
                onClick={() => {
                    setActiveId(id);
                    setNavActive(false);     
                    // document.getElementById('logo').innerHTML = "test";             
                }}
                key={menu.href}
                >
                    <NavItem {...menu} active={id === activeId} 
                    // onClick={() => {
                      
                    // }}
                    />
                </div>
            ))}
        </div>

        <div className={`nav-menu ${
                navActive ? "active" : "inactive"
            }`}
            onClick={() => setNavActive(!navActive)}
        >
            <div className="burger"></div>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;