import { createContext, useContext, useEffect, useState, use } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const temp = [];
        data.forEach((video) => {
          temp.push({
            title: video.name,
            description: video.description,
            src: "http://localhost:8080/chunk?contentId=" + video.content_url,
          });
          setVideos(temp);
        });
      });
  }, []);

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
