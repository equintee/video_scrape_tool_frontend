import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tempVideo from "./assets/torrikk3.mp4";
import "./App.css";
import VideoBox from "./components/VideoBox";
import { Box, Container, Grid, Paper } from "@mui/material";
import VideoFilter from "./components/VideoFilter";
import { useVideoProvider, VideoProvider } from "./providers/VideoProvider";

function App() {
  function VideoList() {
    const { videos, setVideos } = useVideoProvider();

    return (
      <>
        {videos.map((video, index) => (
          <Grid item key={index}>
            <VideoBox video={video} />
          </Grid>
        ))}
      </>
    );
  }

  return (
    <VideoProvider>
      <Grid container display={"flex"} flexDirection={"column"} gap={"2vh"}>
        <Grid container>
          <Grid item>
            <VideoFilter></VideoFilter>
          </Grid>
        </Grid>
        <Grid container display={"flex"} flexDirection={"column"} gap={"2vh"}>
          <VideoList />
        </Grid>
      </Grid>
    </VideoProvider>
  );
}

export default App;
