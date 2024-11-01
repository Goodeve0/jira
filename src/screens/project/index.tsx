import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { EpicScreen } from "screens/Epic";
import { KanbanScreen } from "screens/Kanban";
export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={"kanban"} element={<KanbanScreen />} />
        <Route path={"kanban"} element={<EpicScreen />} />
      </Routes>
    </div>
  );
};
