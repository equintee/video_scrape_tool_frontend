import { FormLabel, Grid, Select, FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useFilterProvider } from "../providers/FilterProvider";
import { useVideoProvider } from "../providers/VideoProvider";

function VideoFilter() {
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const { tags, setTags, songs, setSongs } = useFilterProvider();
  const { videos, setVideos, addVideo } = useVideoProvider();
  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
  };

  const handleSongChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSongs(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
  const urlRegex = /[A-z]+\.com/;

  if (urlRegex.test(description)) {
    addVideo(description);
    setDescription("");
    return;
  }

  const params = new URLSearchParams();

  if (description) {
    params.append("description", description);
  }

  selectedTags.forEach((tag) => {
    params.append("tags", tag); // 👈 repeated params
  });

  selectedSongs.forEach((song) => {
    params.append("songs", song); // 👈 repeated params
  });

  fetch(`http://localhost:8080?${params.toString()}`)
    .then((response) => response.json())
    .then((data) => {
      const videos = data.map((video) => ({
        id: video.id,
        title: video.name,
        description: video.description,
        tags: video.tags,
        song: video.song,
        src: video.content_url,
      }));

      setVideos(videos);
    });
}, [description, selectedTags, selectedSongs]);


  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "2vh",
        width: "50vh",
      }}
    >
      <Grid xs={12}>
        <TextField
          label="Paste link or enter description"
          sx={{ background: "#EFF3EC" }}
          style={{ width: "50vh" }}
          onChange={(value) => setDescription(value.target.value)}
          value={description}
        ></TextField>
      </Grid>
      <Grid>
        <Select
          label="Tags"
          style={{ width: "24vh" }}
          multiple
          value={selectedTags}
          onChange={handleTagChange}
          sx={{ background: "#EFF3EC" }}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid>
        <Select
          style={{ width: "24vh" }}
          multiple
          value={selectedSongs}
          onChange={handleSongChange}
          sx={{ background: "#EFF3EC" }}
        >
          {songs.map((song) => (
            <MenuItem key={song} value={song}>
              {song}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}

export default VideoFilter;
