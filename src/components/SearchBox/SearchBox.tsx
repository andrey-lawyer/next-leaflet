import { ISearchPopsType } from "@/types/typeProps";
import { useSearchBoxComponent } from "@/hooks/useSearchBoxComponent";

export const SearchBox = ({ setPosition, text, setText }: ISearchPopsType) => {
  const {
    handleButtonClick,
    results,
    selectedCity,
    setSelectedCity,
    createShortText,
  } = useSearchBoxComponent(setPosition, text, setText);

  return (
    <div className="w-full mt-10">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введіть назву населеного пункту"
        className="w-full h-[54px] p-2 border border-gray-300 rounded-md  px-4 focus:outline-none focus:ring focus:border-blue-500 block mt-2" // Добавлен mt-2 для отступа
      />

      {results && results.length > 0 && (
        <div className="pt-4 ">
          <select
            value={selectedCity || ""}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:border-blue-500 mt-2" // Добавлен mt-2 для отступа
          >
            <option value="" disabled hidden>
              Оберіть місто (або інший населений пункт)
            </option>
            {results.map((item, index) => (
              <option key={index} value={createShortText(item.label)}>
                {createShortText(item.label)}
              </option>
            ))}
          </select>
          {selectedCity && (
            <button
              type="button"
              onClick={handleButtonClick}
              className="block mt-10 p-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Підтвердити вибір
            </button>
          )}
        </div>
      )}
    </div>
  );
};
