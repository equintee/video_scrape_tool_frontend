import { Box, Container, Grid, Paper } from "@mui/material";
function VideoBox({ video }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        backgroundColor: "rgba(99, 99, 99, 0.14)",
        border: "3px solid rgba(175, 175, 175, 0.12)",
        width: "50vh",
        height: "50vh",
      }}
    >
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          display: "inline-block",
          textAlign: "left",
          fontSize: "5.0vh",
          flex: "1 1 auto",
          paddingLeft: "5%",
          wordWrap: "break-word",
        }}
      >
        {video.title}
      </Grid>
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          display: "inline-block",
          textAlign: "left",
          fontSize: "2.5vh",
          flex: "1 1 auto",
          paddingLeft: "5%",
          wordWrap: "break-word",
        }}
      >
        {video.description}
      </Grid>
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flex: "1 1 auto",
          objectFit: "scale-down",
        }}
      >
        <video
          muted
          controls
          style={{
            display: "inline-block",
            width: "90%",
            flexShrink: "1",
            position: "relative",
          }}
          autoPlay
          src={video.src}
        ></video>
      </Grid>
    </Grid>
  );
}

export default VideoBox;
