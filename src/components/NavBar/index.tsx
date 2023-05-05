import Link from "next/link";
import Image from 'next/image';

import  { List } from "../List/index.tsx";

import "./NavBar.css";

const listProps = [
    { id: 0, url: "/overview", src: "/overview.svg", alt: "overview-icon", text: "Overview" },
    { id: 1, url: "/stats", src: "/stats.svg", alt: "stats-icon", text: "Stats" },
    { id: 2, url: "/projects", src: "/projects.svg", alt: "projects-icon", text: "Projects" },
    { id: 3, url: "/chat", src: "/chat.svg", alt: "chat-icon", text: "Chat" },
    { id: 4, url: "/calendar", src: "/calendar.svg", alt: "calendar-icon", text: "Calendar" }
]

export const NavBar = () => {

  return (
    <nav className="menu">
        <List listProps={listProps}/>   
    </nav>
  )
}

