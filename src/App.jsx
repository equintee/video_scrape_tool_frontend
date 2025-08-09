import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tempVideo from "./assets/torrikk3.mp4";
import "./App.css";
import VideoBox from "./components/VideoBox";
import { Box, Container, Grid, Paper } from "@mui/material";

function App() {
  function mockVideoBox() {
    return (
      <>
        <Grid item>
          <VideoBox
            video={{
              title: "Sample Video",
              description: "This is a sample video description.",
              src: tempVideo,
            }}
          />
        </Grid>
        <Grid item>
          <VideoBox
            video={{
              title: "Sample Video",
              description: "This is a sample video description.",
              src: tempVideo,
            }}
          />
        </Grid>
        <Grid item>
          <VideoBox
            video={{
              title: "Sample Video",
              description: "This is a sample video description.",
              src: tempVideo,
            }}
          />
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 2,
        }}
      >
        {mockVideoBox()}
      </Grid>
    </>
  );
}

export default App;
