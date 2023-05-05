import Link from "next/link";
import Image from 'next/image';

import "./Sidebar.css";

export const Sidebar = () => {
  return (
   <section className="sidebar">
        <div className="sidebar__container">
          <header className="header">
            <Link className="header__logo" href="/">
            .studio
            </Link>
              <nav className="menu">
                  <ul className="list">
                      <li className="list__item">
                            <Link className="list__link" href="/overview">
                                <Image className="list__image" src="/overview.svg" alt="overview-icon" width={25} height={25}/>
                                Overview
                            </Link>
                      </li>
                      <li className="list__item">
                            <Link className="list__link" href="/stats">
                                <Image className="list__image" src="/stats.svg" alt="stats-icon" width={25} height={25}/>
                                Stats
                            </Link>
                      </li>
                      <li className="list__item">
                            <Link className="list__link" href="/projects">
                                <Image className="list__image" src="/projects.svg" alt="projects-icon" width={25} height={25}/>
                                Projects
                            </Link>
                      </li>
                      <li className="list__item">
                            <Link className="list__link" href="/chat">
                                <Image className="list__image" src="/chat.svg" alt="chat-icon" width={25} height={25}/>
                                Chat
                            </Link>
                      </li>
                      <li className="list__item">
                            <Link className="list__link" href="/calendar">
                                <Image className="list__image" src="/calendar.svg" alt="calendar-icon" width={25} height={25}/>
                                Calendar
                            </Link>
                      </li>
                  </ul>
              </nav>
              <div className="bottom__menu">
                <ul className="list">
                    <li className="list__item">
                    <Link className="list__link" href="/settings">
                      <Image className="list__image" src="/settings.svg" alt="setting-icon" width={25} height={25}/>
                      Settings
                    </Link>
                    </li>
                    <li className="list__item">
                    <Link className="list__link" href="/log_out">
                      <Image className="list__image" src="/log_out.svg" alt="log_out-icon" width={25} height={25}/>
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
