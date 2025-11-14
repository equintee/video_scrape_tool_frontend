import { createContext, useContext, useEffect, useState } from "react";

const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tags")
      .then((response) => response.json())
      .then((json) => {
        setTags(json);
      });
  }, []);
  return (
    <TagContext.Provider value={{ tags, setTags }}>
      {children}
    </TagContext.Provider>
  );
};

export const useTagProvider = () => {
  const context = useContext(TagContext);

  if (!context) {
    throw new Error("blabla");
  }
  return context;
};
