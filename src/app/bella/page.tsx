"use client";

import { useState } from "react";

export default function Calculate() {
  const [cost, setCost] = useState("");
  const [margin, setMargin] = useState("");
  const calTax = Number(cost) * 0.05;
  const costAfterTax = Number(cost) + calTax;
  const costAfterMargin = costAfterTax * 0.2;
  return (
    <>
      <input
        type="text"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <input
        type="text"
        value={margin}
        onChange={(e) => setMargin(e.target.value)}
      />
      <p>Tax : {calTax}</p>
      <p>Cost after tax: {costAfterTax}</p>
      <p>Cost after Margin: {costAfterMargin}</p>
    </>
  );
}
