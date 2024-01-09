import { useEffect, useMemo, useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { toast } from "react-toastify";

export function useSearchBoxComponent(
  setPosition: Function,
  text: string,
  setText: Function
) {
  const provider = useMemo(() => {
    return new OpenStreetMapProvider({
      params: {
        "accept-language": "ua",
        countryCodes: "ua",
      },
    });
  }, []);

  const [results, setResults] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | "">("");

  useEffect(() => {
    const fetchResults = async () => {
      const searchResults = await provider.search({ query: text });
      setResults(searchResults);
    };

    const delay = 300;
    const timeoutId = setTimeout(fetchResults, delay);

    return () => clearTimeout(timeoutId);
  }, [text, provider]);

  const createShortText = (someText: string): string => {
    return someText.length > 15 ? someText.slice(0, 30) + "..." : someText;
  };

  const handleButtonClick = () => {
    const selectedCityObject = results.find(
      (item) => createShortText(item.label) === selectedCity
    );

    if (selectedCityObject) {
      setText(selectedCityObject.label);
      setPosition([
        String(selectedCityObject.y),
        String(selectedCityObject.x),
        selectedCityObject.label,
      ]);
      setSelectedCity("");
    } else {
      toast("Будь ласка, оберіть город.");
    }
  };
  return {
    handleButtonClick,
    results,
    selectedCity,
    setSelectedCity,
    createShortText,
  };
}
