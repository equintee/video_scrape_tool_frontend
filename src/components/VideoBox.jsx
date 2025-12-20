import {
  Chip,
  createTheme,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { green } from "@mui/material/colors";
function VideoBox({ video }) {
  if (!video) {
    return;
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f3efef",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255, 0, 0, 0)",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "rgb(243, 239, 239)",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
          <TextField
            fullWidth
            spellCheck={false}
            multiline
            value={video.description}
          ></TextField>
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
            {" "}
            <Stack direction={"row"} sx={{ flexWrap: "wrap" }}>
              {video.tags.map((tag) => (
                <Chip label={tag} color="primary" variant="outlined"></Chip>
              ))}
            </Stack>
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
    </ThemeProvider>
  );
}

export default VideoBox;
