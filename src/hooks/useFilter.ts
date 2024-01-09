import { useState } from "react";

export function useFilter(setCost: Function, setAccommodationType: Function) {
  const [internalCost, setInternalCost] = useState("");
  const [internalAccommodationType, setInternalAccommodationType] =
    useState("");

  const handleCostChange = (e: any) => {
    setInternalCost(e.target.value);
  };

  const handleAccommodationTypeChange = (e: any) => {
    setInternalAccommodationType(e.target.value);
  };

  const applyFilter = () => {
    console.log(internalCost);
    console.log(internalAccommodationType);
    setCost(internalCost);
    setAccommodationType(internalAccommodationType);
  };

  const resetFilter = () => {
    setInternalCost("");
    setInternalAccommodationType("");
    setCost("");
    setAccommodationType("");
  };
  return {
    applyFilter,
    handleCostChange,
    handleAccommodationTypeChange,
    resetFilter,
    internalCost,
    internalAccommodationType,
  };
}
