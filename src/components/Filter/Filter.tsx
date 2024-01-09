import { accommodations } from "@/data/accommodations";
import { useFilter } from "@/hooks/useFilter";

import { IFilterProps } from "@/types/typeProps";

export const Filter = ({ setCost, setAccommodationType }: IFilterProps) => {
  const {
    applyFilter,
    handleCostChange,
    handleAccommodationTypeChange,
    resetFilter,
    internalCost,
    internalAccommodationType,
  } = useFilter(setCost, setAccommodationType);

  const isFilterApplied =
    internalCost !== "" || internalAccommodationType !== "";

  return (
    <div className="p-3 bg-gray-200 flex flex-col gap-6 overflow-y-auto max-h-screen">
      <h2 className="text-xl font-bold">Застосувати фільтр</h2>
      <label className="flex flex-col">
        <span className="mt-2">
          Введіть максимальну вартість оренди (тільки цифри)
        </span>
        <input
          placeholder="1000"
          type="text"
          value={internalCost}
          onChange={handleCostChange}
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </label>

      <select
        value={internalAccommodationType}
        onChange={handleAccommodationTypeChange}
        className="mt-2 p-2 border border-gray-300 rounded"
      >
        <option value="">Оберіть тип житла</option>
        {accommodations.map((el) => (
          <option key={el.id} value={el.type}>
            {el.type}
          </option>
        ))}
      </select>

      <button
        onClick={applyFilter}
        disabled={!isFilterApplied}
        className={`mt-4 ${
          isFilterApplied
            ? "bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 p-2 rounded cursor-not-allowed"
        }`}
      >
        Застосувати фільтр
      </button>
      <button
        onClick={resetFilter}
        disabled={!isFilterApplied}
        className={`mt-2 ${
          isFilterApplied
            ? "bg-gray-500 text-white p-2 rounded cursor-pointer hover:bg-gray-600"
            : "bg-gray-300 text-gray-500 p-2 rounded cursor-not-allowed"
        }`}
      >
        Скинути фільтр
      </button>
    </div>
  );
};
