import {
  Chip,
  ClickAwayListener,
  createTheme,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";

function VideoBox({ video }) {
  const [data, setData] = useState(video);
  const [update, setUpdate] = useState(false);
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
      <ClickAwayListener onClickAway={() => setUpdate(false)}>
        <Grid
          container
          onClick={() => setUpdate(true)}
          sx={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            backgroundColor: update
              ? "rgba(99, 99, 99, 0.31)"
              : "rgba(99, 99, 99, 0.14)",
            border: update
              ? "3px solid rgba(175, 175, 175, 0.31)"
              : "3px solid rgba(175, 175, 175, 0.14)",
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
              wordWrap: "break-word",
            }}
          >
            <TextField
              fullWidth
              spellCheck={false}
              multiline
              value={data.description}
              onChange={(text) => {
                setData({
                  ...data,
                  description: text.target.value,
                });
              }}
            ></TextField>
          </Grid>
          {data.tags ? (
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
              <Stack
                direction={"row"}
                sx={{ flexWrap: "wrap", columnGap: "5px", rowGap: "5px" }}
              >
                {data.tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    color="primary"
                    variant="outlined"
                    onDelete={() => {
                      setData((prev) => ({
                        ...prev,
                        tags: prev.tags.filter((t) => t !== tag),
                      }));
                    }}
                  />
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
            🎵 {data.song.name}
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
              src={data.src}
            ></video>
          </Grid>
        </Grid>
      </ClickAwayListener>
    </ThemeProvider>
  );
}

export default VideoBox;
