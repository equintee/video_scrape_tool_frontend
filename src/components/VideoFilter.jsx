import { FormLabel, Grid, Select } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { TagProvider, useTagProvider } from "../providers/TagProvider";

function VideoFilter() {
  const [description, setDescription] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);
  const { tags, setTags } = useTagProvider();
  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
  };

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
          onChange={(value) => setDescription(value)}
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
