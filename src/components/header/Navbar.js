import React from 'react';
import NavLink from "./NavLink";
import { NAV } from "../data";

export default function Navbar() {

  return (
    <nav id="navbar" className="navbar">
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
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  )
}
