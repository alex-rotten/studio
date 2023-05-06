import Link from "next/link";
import Image from "next/image";
import { NavBar } from "../NavBar/index.tsx";
import {BottomMenu} from "../BottomMenu/index.tsx";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__container">
        <header className="header">
          <Link className="header__logo" href="/">
            .studio
          </Link>
          <NavBar/>
          <BottomMenu/>
        </header>
      </div>
    </section>
  );
};
