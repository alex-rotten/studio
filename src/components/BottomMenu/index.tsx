import {List} from "../List/index.tsx";

import "./BottomMenu.css";

interface IListProps {
    id: number;
    href: string;
    src: string;
    alt: string;
    text: string;
    className?: string;
}

const listProps: Array<IListProps> = [
    {
      id: 0,
      href: "/settings",
      src: "/settings.svg",
      alt: "setting-icon",
      text: "Settings",
    },
    {
      id: 1,
      href: "/log_out",
      src: "/log_out.svg",
      alt: "log_out-icon",
      text: "Log out",
    }
  ];

export const BottomMenu = (): JSX.Element => {
    return (
        <div className="bottom__menu">
            <List listProps={listProps}/>
        </div>
    );
}