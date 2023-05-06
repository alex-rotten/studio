import { FC } from "react";
import { ListItem } from "../ListItem/index.tsx";

import "./List.css";

interface IListProps {
  id: number;
  href: string;
  src: string;
  alt: string;
  text: string;
  className?: string;
}

interface IList {
  listProps: IListProps[];
}

export const List: FC<IList> = ({ listProps }): JSX.Element => {
  return (
    <ul className="list">
      <ListItem listProps={listProps} />
    </ul>
  );
};
