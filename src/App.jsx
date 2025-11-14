import "./App.css";
import VideoBox from "./components/VideoBox";
import { Box, Container, Grid, Paper } from "@mui/material";
import VideoFilter from "./components/VideoFilter";
import { useVideoProvider, VideoProvider } from "./providers/VideoProvider";
import { TagProvider, useTagProvider } from "./providers/TagProvider";

function App() {
  function VideoList() {
    const { videos, setVideos } = useVideoProvider();
    if (!videos) {
      return;
    }

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
            <TagProvider>
              <VideoFilter></VideoFilter>
            </TagProvider>
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
