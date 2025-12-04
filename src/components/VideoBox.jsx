import { Box, Container, Grid, Paper } from "@mui/material";
function VideoBox({ video }) {
  if (!video) {
    return;
  }
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
        rowGap: "1vh",
      }}
    >
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          display: "inline-block",
          textAlign: "left",
          fontSize: "2.5vh",
          flex: "1 1 auto",
          paddingLeft: "1%",
          wordWrap: "break-word",
        }}
      >
        {video.description}
      </Grid>
      {video.tags ? (
        <Grid
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            paddingLeft: "1%",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          {video.tags.map((tag) => (
            <Grid
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: "8px",
                py: "2px",
                marginRight: "6px",
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "20px",
                fontSize: "1.5vh",
                fontWeight: "600",
                width: "auto",
                height: "auto",
              }}
            >
              {tag}
            </Grid>
          ))}
        </Grid>
      ) : (
        <></>
      )}
      <Grid
        sx={{
          position: "relative",
          paddingLeft: "1%",
        }}
      >
        🎵 {video.song.name}
      </Grid>
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          flex: "1 1 auto",
        }}
      >
        <video
          muted
          controls
          style={{
            maxWidth: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
          src={video.src}
        ></video>
      </Grid>
    </Grid>
  );
}

export default VideoBox;
