import Link from "next/link";
import Image from "next/image";
import { NavBar } from "../NavBar/index.tsx";


import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__container">
        <header className="header">
          <Link className="header__logo" href="/">
            .studio
          </Link>
          <NavBar />
          <div className="bottom__menu">
            <ul className="list">
              <li className="list__item">
                <Link className="list__link" href="/settings">
                  <Image
                    className="list__image"
                    src="/settings.svg"
                    alt="setting-icon"
                    width={25}
                    height={25}
                  />
                  Settings
                </Link>
              </li>
              <li className="list__item">
                <Link className="list__link" href="/log_out">
                  <Image
                    className="list__image"
                    src="/log_out.svg"
                    alt="log_out-icon"
                    width={25}
                    height={25}
                  />
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </section>
  );
};
