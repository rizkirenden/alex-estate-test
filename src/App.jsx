import React from "react";
import "./App.css";
import { CardHeader } from "./components/molecules/CardHeader";
import { Sidebar } from "./components/molecules/Sidebar";
import { CardProduction } from "./components/molecules/CardProduction";
import { Cardreality } from "./components/molecules/Cardreality";
import { TabelCash } from "./components/molecules/TabelCash";
import { TabelSell } from "./components/molecules/TabelSell";
import { ButtonCash } from "./components/molecules/ButtonCash";
import { ButtonSell } from "./components/molecules/ButtonSell";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <CardHeader />

        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div className="flex gap-4">
            <CardProduction />
            <Cardreality />
          </div>

          <div className="bg-white shadow-md rounded-md p-4 space-y-2 relative">
            <div className="-mt-3 -ml-3">
              <ButtonCash />
            </div>
            <TabelCash />
          </div>

          <div className="bg-white shadow-md rounded-md p-4 space-y-2 relative">
            <div className="-mt-3 -ml-3">
              <ButtonSell />
            </div>
            <TabelSell />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
