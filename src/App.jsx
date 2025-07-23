import React from "react";
import "./App.css";
import { CardHeader } from "./components/molecules/CardHeader";
import { Sidebar } from "./components/molecules/Sidebar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <CardHeader />
      </div>
    </div>
  );
}

export default App;
