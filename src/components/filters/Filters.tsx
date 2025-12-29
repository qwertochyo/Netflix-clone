import { twMerge } from "tailwind-merge";
import { filtersData } from "./filters.data";
import { useFilterStore } from "../../store/store";

export default function Filters() {
  const { currentFilter, setCurrentFilter } = useFilterStore();

  return (
      <div className="mx-auto mt-10 border border-gray-300 p-0.5 rounded-md w-max">
        {filtersData.map((filter) => (
          <button key={filter} className={twMerge("px-5 py-2 rounded-md cursor-pointer font-medium bg-transparent text-black transition-colors duration-300", filter === currentFilter && "bg-primary text-white")} type="button" onClick={() => setCurrentFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
  );
}