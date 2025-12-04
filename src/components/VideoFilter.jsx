import { FormLabel, Grid, Select } from "@mui/material";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useTagProvider } from "../providers/TagProvider";
import { useVideoProvider } from "../providers/VideoProvider";

function VideoFilter() {
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const { tags, setTags } = useTagProvider();
  const { videos, setVideos } = useVideoProvider();
  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    const params = new URLSearchParams({
      description: description,
      tags: selectedTags,
    });

    fetch("http://localhost:8080?" + params.toString())
      .then((response) => response.json())
      .then((data) => {
        const temp = [];
        data.forEach((video) => {
          temp.push({
            title: video.name,
            description: video.description,
            tags: video.tags,
            song: video.song,
            src: "http://localhost:8080/chunk?contentId=" + video.content_url,
          });
        });
        setVideos(temp);
      });
  }, [description, selectedTags]);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "2vh",
        width: "50vh",
        maxHeight: "10vh",
      }}
    >
      <Grid xs={12}>
        <TextField
          label="Description"
          sx={{ background: "#EFF3EC" }}
          style={{ width: "24vh" }}
          onChange={(value) => setDescription(value.target.value)}
        ></TextField>
      </Grid>
      <Grid>
        <Select
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
    </Grid>
  );
}

export default VideoFilter;
