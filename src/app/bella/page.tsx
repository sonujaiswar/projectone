"use client";

import { useState } from "react";

export default function Calculate() {
  const [cost, setCost] = useState("");
  const [tax, setTax] = useState("");
  const [margin, setMargin] = useState("");
  const calTax = Number(cost) * 0.1;
  const costAfterTax = Number(cost) + calTax;

  // Convert margin input from percentage string to decimal value
  const calMarginPercent = Number(margin) / 100;

  // Calculate margin cost
  const marginCost = costAfterTax * calMarginPercent;
  const costAfterMargin = costAfterTax + marginCost;

  // Round to the nearest 10
  const roundedCostAfterMargin = Math.round(costAfterMargin / 10) * 10;

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-96 p-8 shadow flex flex-col gap-5">
          <input
            type="number"
            value={tax}
            className="w-full outline-none border border-slate-200 h-9 rounded px-2"
            onChange={(e) => setTax(e.target.value)}
            placeholder="Enter tax"
          />

          <input
            type="number"
            value={cost}
            className="w-full outline-none border border-slate-200 h-9 rounded px-2"
            onChange={(e) => setCost(e.target.value)}
            placeholder="Enter purchase cost"
          />

          <input
            type="text"
            value={margin}
            className="w-full outline-none border border-slate-200 h-9 rounded px-2"
            onChange={(e) => setMargin(e.target.value)}
            placeholder="Enter margin percent"
          />
          <p>Tax : {calTax}</p>
          <p>Cost after tax: {costAfterTax}</p>
          <p>Cost after Margin (rounded): {roundedCostAfterMargin}</p>
        </div>
      </div>
    </>
  );
}
