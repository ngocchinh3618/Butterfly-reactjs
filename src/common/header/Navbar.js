import React from 'react';
import NavLink from "./NavLink";
import { NAV } from "../../components/data";
// import "./Navbar.css";
import Styles from "./Navbar.module.css";

export default function Navbar() {

  return (
    <nav id="navbar" className={Styles.navbar}>
      <ul>
        {NAV.map(data =>
          <NavLink name={data.name} link={data.link} act={data.act} key={data.name} classDown={data?.classDown} >
            {data.submenu &&
              <ul>
                {data.submenu.map(datas =>
                  <NavLink name={datas.name} link={datas.link} key={datas.id} classRight={datas?.classRight} >
                    {datas.submenu &&
                      <ul>
                        {datas.submenu.map(datass =>
                          <NavLink name={datass.name} link={datass.link} key={datass.id} >
                          </NavLink>
                        )}
                      </ul>
                    }
                  </NavLink>
                )}
              </ul>
            }
          </NavLink>
        )}
      </ul>
      <i className={"bi bi-list " + Styles["mobile-nav-toggle"]} />
    </nav>
  )
}
