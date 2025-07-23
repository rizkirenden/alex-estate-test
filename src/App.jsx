import React from "react";
import "./App.css";
import { CardHeader } from "./components/molecules/CardHeader";
import { Sidebar } from "./components/molecules/Sidebar";
import { CardProduction } from "./components/molecules/CardProduction";
import { Cardreality } from "./components/molecules/Cardreality";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <CardHeader />

        {/* Content */}
        <div className="flex-1 p-6">
          {/* CardProduction di kiri */}
          <div className="flex gap-4">
            <CardProduction />
            <Cardreality />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
