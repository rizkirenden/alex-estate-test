import React from "react";

export const CardProduction = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-300">
      {/* Header */}
      <div className="bg-[#1F2937] text-white px-4 py-3">
        <h3 className="text-lg font-semibold">Production Card</h3>
      </div>

      {/* Body / Isi */}
      <div className="bg-white px-4 py-5">
        {/* Kamu bisa isi konten di sini */}
        <p className="text-gray-700 text-sm">
          Konten produksi akan ditampilkan di sini.
        </p>
      </div>
    </div>
  );
};
