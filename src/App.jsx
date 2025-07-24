import React from "react";
import "./App.css";
import { CardHeader } from "./components/molecules/CardHeader";
import { Sidebar } from "./components/molecules/Sidebar";
import { CardProduction } from "./components/molecules/CardProduction";
import { Cardreality } from "./components/molecules/Cardreality";
import { TabelCash } from "./components/molecules/TabelCash";
import { ButtonCash } from "./components/molecules/ButtonCash";

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
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Baris 1: Card Production & Card Reality */}
          <div className="flex gap-4">
            <CardProduction />
            <Cardreality />
          </div>

          {/* Baris 2: ButtonCash dan TabelCash */}
          {/* Baris 2: ButtonCash dan TabelCash */}
          <div className="relative">
            {/* Tabel dengan kotak dan bayangan */}
            <div className="bg-white shadow-md rounded-md p-4">
              {/* Tombol Cash di pojok kiri atas */}
              <div className="absolute top-[-12px] left-[-12px]">
                <ButtonCash />
              </div>

              {/* TabelCash isi */}
              <TabelCash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
