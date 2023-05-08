import Link from "next/link";
import Image from "next/image";
import { List } from "../List/index.tsx";
import { SearchBar } from "../SearchBar/index.tsx";
import { UserCorner } from "../UserCorner/index.tsx";

import "./ToolBar.css";

export const ToolBar = () => {
  return (
    <section className="toolbar">
      <SearchBar placeholder="Search"/>
      <UserCorner/>
    </section>
  );
}