import React, { useCallback, useState } from "react";
import { ICardStatus, IFilterProps } from "../interfaces/Interfaces";

export const Filter = ({activeFilter, onFilterChange}: IFilterProps) => {
  const [activeTab, setActiveTab] = useState<string>(activeFilter);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Lost", value: "lost" },
    { label: "Found", value: "found" },
    { label: "Free", value: "free" },
  ];

  const handleFilter = useCallback((status: string) => {
    setActiveTab(status);
    onFilterChange(status as ICardStatus);
  }, [activeFilter, onFilterChange]);

  return (
    <div className="w-full max-w-md mx-auto pt-4 relative z-10">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleFilter(tab.value)}
            className={`flex-1 py-2 text-center mx-2 focus:outline-none focus:ring focus:ring-violet-300 ${
              activeTab === tab.value
                ? "border-2 border-indigo-500 text-blue-500"
                : "text-indigo-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

