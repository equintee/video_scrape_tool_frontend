import { createContext, useContext } from "react";

export const VideoContext = createContext(null);

export const VideoProvider = ({ children, value }) => {
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};
export function useVideoProvider({ children }) {
  return useContext(VideoContext);
}
