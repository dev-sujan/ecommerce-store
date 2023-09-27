import React from "react";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
