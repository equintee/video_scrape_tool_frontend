import { Box, Container, Grid, Paper } from "@mui/material";
import tempVideo from "../assets/torrikk3.mp4";
function VideoBox() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "initial",
        alignItems: "flex-start",
        backgroundColor: "rgba(99, 99, 99, 0.14)",
        border: "3px solid rgba(175, 175, 175, 0.12)",
        width: "50vh",
        gap: "1rem",
      }}
    >
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          display: "inline-block",
          textAlign: "left",
          fontSize: "2rem",
          paddingLeft: "5%",
          wordWrap: "break-word",
        }}
      >
        Title
      </Grid>
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          display: "inline-block",
          textAlign: "left",
          fontSize: "1rem",
          paddingLeft: "5%",
          wordWrap: "break-word",
        }}
      >
        Description
      </Grid>
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "left",
        }}
      >
        <video
          muted
          controls
          style={{
            display: "flex",
            width: "90%",
            margin: "auto",
            alignSelf: "flex-start",
          }}
          autoPlay
          src={tempVideo}
        ></video>
      </Grid>
    </Grid>
  );
}

export default VideoBox;
