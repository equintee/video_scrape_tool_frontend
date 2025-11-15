import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
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
