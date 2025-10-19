import { createContext, useContext, useEffect, useState, use } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      title: "Sample Video",
      description: "This is a sample video description.",
      src: "D:\\Projects\\video_scrape_tool_frontend\\src\\assets\\torrikk3.mp4",
    },
  ]);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoProvider = () => {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error("yarrak");
  }

  return context;
};
