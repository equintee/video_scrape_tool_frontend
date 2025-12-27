import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const updateVideo = useCallback((updated) => {
    setVideos((prev) => prev.map((v) => (v.id === updated.id ? updated : v)));

    fetch("http://localhost:8080/", {
      method: "PATCH",
      body: JSON.stringify(updated),
      headers: {
        "Content-type": "application/json",
      },
    });
  }, []);
  return (
    <VideoContext.Provider value={{ videos, setVideos, updateVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoProvider = () => {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error("bla bla");
  }

  return context;
};
