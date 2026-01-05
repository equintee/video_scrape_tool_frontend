import { createContext, useContext, useEffect, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tags")
      .then((response) => response.json())
      .then((json) => {
        setTags(json["tags"]);
        setSongs(json["songs"]);
      });
  }, []);
  return (
    <FilterContext.Provider value={{ tags, setTags, songs, setSongs }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterProvider = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("blabla");
  }
  return context;
};
