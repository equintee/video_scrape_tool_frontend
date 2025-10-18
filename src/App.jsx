import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tempVideo from "./assets/torrikk3.mp4";
import "./App.css";
import VideoBox from "./components/VideoBox";
import { Box, Container, Grid, Paper } from "@mui/material";
import VideoFilter from "./components/VideoFilter";

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
    <Grid container display={"flex"} flexDirection={"column"} gap={"2vh"}>
      <Grid container>
        <Grid item>
          <VideoFilter></VideoFilter>
        </Grid>
      </Grid>
      <Grid container display={"flex"} flexDirection={"column"} gap={"2vh"}>
        {mockVideoBox()}
      </Grid>
    </Grid>
  );
}

export default App;
