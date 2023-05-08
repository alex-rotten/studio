import { List } from "../List/index.tsx";


import "./NavBar.css";

interface IListProps {
  id: number;
  href: string;
  src: string;
  alt: string;
  text: string;
}

const listProps: Array<IListProps> = [
  {
    id: 0,
    href: "/overview",
    src: "/overview.svg",
    alt: "overview-icon",
    text: "Overview",
  },
  {
    id: 1,
    href: "/stats",
    src: "/stats.svg",
    alt: "stats-icon",
    text: "Stats",
  },
  {
    id: 2,
    href: "/projects",
    src: "/projects.svg",
    alt: "projects-icon",
    text: "Projects",
  },
  {
    id: 3,
    href: "/chat",
    src: "/chat.svg",
    alt: "chat-icon",
    text: "Chat"
  },
  {
    id: 4,
    href: "/calendar",
    src: "/calendar.svg",
    alt: "calendar-icon",
    text: "Calendar",
  }
];

export const NavBar = (): JSX.Element => {
  return (
    <nav className="menu">
      <List listProps={listProps} />
    </nav>
  );
};
