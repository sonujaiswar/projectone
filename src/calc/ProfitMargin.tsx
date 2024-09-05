"use client";

import { useState } from "react";

export default function ProfitMargin() {
  const [cost, setCost] = useState("");
  const [revenue, setRevenue] = useState("");

  const margin = Number(revenue) - Number(cost);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="shadow w-96">
          <h3>Profit margin calculator</h3>
          <p>
            Use this simple calulator to get the profit margin percentage and
            Earned value
          </p>
          <form>
            <input
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <input
              type="text"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
            />
          </form>
          Cost: {cost}
          Revenue: {revenue}
          Margin: {margin}
        </div>
      </div>
    </>
  );
}
