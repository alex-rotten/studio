import { Sidebar } from "@/components";
import { ToolBar } from "@/components/ToolBar";

import "./page.css";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="page">
      <Sidebar />
      <main className="main">
        <ToolBar />
      </main>
    </div>
  );
}
