import {
  Chip,
  ClickAwayListener,
  createTheme,
  Grid,
  Menu,
  MenuItem,
  Stack,
  TextField,
  ThemeProvider,
  Paper,
} from "@mui/material";
import { useState, useRef, useMemo, useEffect } from "react";
import { useTagProvider } from "../providers/TagProvider";
import { useVideoProvider } from "../providers/VideoProvider";

function VideoBox({ video }) {
  const [data, setData] = useState(video);
  const [update, setUpdate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tagFilter, setTagFilter] = useState("");
  const { tags, setTags } = useTagProvider();
  const plusChipRef = useRef(null);

  const { updateVideo } = useVideoProvider();
  const isMounted = useRef(false);
  if (!video) return null;
  useEffect(() => {
    if (!isMounted.current && update) {
      isMounted.current = true;
      return;
    }

    console.log(updateVideo(data));
  }, [update]);

  const filteredTags = useMemo(() => {
    const f = tagFilter.toLowerCase();
    return tags.filter((t) => t.toLowerCase().includes(f));
  }, [tagFilter]);

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
      <ClickAwayListener
        onClickAway={() => {
          setUpdate(false);
          setMenuOpen(false);
          setTagFilter("");
        }}
      >
        <Grid
          container
          onClick={() => setUpdate(true)}
          sx={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
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
          {/* DESCRIPTION */}
          <TextField
            fullWidth
            multiline
            spellCheck={false}
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />

          {/* TAGS */}
          {data.tags && (
            <Grid sx={{ width: "100%", paddingLeft: "1%" }}>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: "5px" }}>
                {data.tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    color="primary"
                    variant="outlined"
                    onDelete={
                      update
                        ? () =>
                            setData((prev) => ({
                              ...prev,
                              tags: prev.tags.filter((t) => t !== tag),
                            }))
                        : undefined
                    }
                  />
                ))}

                {update && (
                  <>
                    <Chip
                      ref={plusChipRef}
                      label="+"
                      color="primary"
                      variant="outlined"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(true);
                      }}
                      sx={{ cursor: "pointer" }}
                    />

                    <Menu
                      anchorEl={plusChipRef.current}
                      open={menuOpen}
                      onClose={() => {
                        setMenuOpen(false);
                        setTagFilter("");
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <Paper sx={{ px: 1, pt: 1 }} elevation={0}>
                        <TextField
                          autoFocus
                          value={tagFilter}
                          onChange={(e) => setTagFilter(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && tagFilter.trim()) {
                              const value = tagFilter.trim();
                              setData((prev) => ({
                                ...prev,
                                tags: prev.tags.includes(value)
                                  ? prev.tags
                                  : [...prev.tags, value],
                              }));
                              setTagFilter("");
                              setMenuOpen(false);
                            }
                          }}
                        />
                      </Paper>

                      {filteredTags.map((tag) => (
                        <MenuItem
                          key={tag}
                          disabled={data.tags.includes(tag)}
                          onClick={() => {
                            setData((prev) => ({
                              ...prev,
                              tags: [...prev.tags, tag],
                            }));
                            setTagFilter("");
                            setMenuOpen(false);
                          }}
                        >
                          {tag}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
              </Stack>
            </Grid>
          )}
          <Grid sx={{ display: "flex", paddingLeft: "1%" }}>
            🎵 {data.song.name}
          </Grid>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <video
              muted
              controls
              src={data.src}
              style={{ maxWidth: "100%", objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </ClickAwayListener>
    </ThemeProvider>
  );
}

export default VideoBox;
