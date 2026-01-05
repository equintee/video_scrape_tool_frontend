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

  const addVideo = useCallback((source) => {
    fetch("http://localhost:8080", {
      method: "POST",
      body: JSON.stringify({
        source: source,
        type: "twitter",
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(pirt);
        }
        return response.json();
      })
      .then((video) => {
        setVideos((prev) => [
          {
            ...video,
            src: video.content_url,
          },
          ...prev,
        ]);
      });
  });
  return (
    <VideoContext.Provider value={{ videos, setVideos, updateVideo, addVideo }}>
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
