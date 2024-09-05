"use client";

import { useState } from "react";

export default function Calculate() {
  const [cost, setCost] = useState("");
  const [margin, setMargin] = useState("");
  const [rounding, setRounding] = useState(10); // State for rounding value
  const calTax = Math.round((Number(cost) * 0.1) / 10) * 10;
  const costAfterTax = Number(cost) + calTax;

  // Convert margin input from percentage string to decimal value
  const calMarginPercent = Number(margin) / 100;

  // Calculate margin cost
  const marginCost = costAfterTax * calMarginPercent;
  const costAfterMargin = costAfterTax + marginCost;

  // Round to the selected value (10, 20, or 50)
  const roundedCostAfterMargin =
    Math.round(costAfterMargin / rounding) * rounding;

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-96 p-8 shadow flex flex-col gap-5">
          {/* Cost Input */}
          <input
            type="number"
            value={cost}
            className="w-full outline-none border border-slate-200 h-9 rounded px-2"
            onChange={(e) => setCost(e.target.value)}
            placeholder="Enter purchase cost"
          />

          {/* Margin Input */}
          <input
            type="number"
            value={margin}
            className="w-full outline-none border border-slate-200 h-9 rounded px-2"
            onChange={(e) => setMargin(e.target.value)}
            placeholder="Enter margin percent"
          />

          {/* Rounding Options */}
          <div className="flex gap-4">
            <p>Round to </p>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value={10}
                checked={rounding === 10}
                onChange={() => setRounding(10)}
                className="form-radio text-blue-500"
              />
              10
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value={20}
                checked={rounding === 20}
                onChange={() => setRounding(20)}
                className="form-radio text-blue-500"
              />
              20
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value={50}
                checked={rounding === 50}
                onChange={() => setRounding(50)}
                className="form-radio text-blue-500"
              />
              50
            </label>
          </div>

          {/* Display Results */}
          <p className="text-green-50 bg-green-700 p-2">
            Rounded selling (rounded to {rounding}) :{" "}
            <strong> {roundedCostAfterMargin}</strong>
          </p>

          <p className="text-teal-50 bg-teal-700 p-2">
            Actual selling price : <strong>{costAfterMargin}</strong>
          </p>

          <p className="text-amber-50 bg-amber-700 p-2">
            Tax : <strong> {calTax}</strong>
          </p>
          <p className="text-red-50 bg-red-700 p-2">
            Purchase after tax : <strong>{costAfterTax}</strong>
          </p>
        </div>
      </div>
    </>
  );
}
