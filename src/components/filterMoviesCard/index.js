import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

import { getGenres } from "../../api/tmdb-api";

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterMoviesCard(props) {
    const [genres, setGenres] = useState([{ id: '0', name: "All" }])
  
    useEffect(() => {
        getGenres().then((allGenres) => {
          setGenres([genres[0], ...allGenres]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  
    const handleChange = (e, type, value) => {
      e.preventDefault()
      props.onUserInput(type, value)
    };
    const handleTextChange = e => {
      handleChange(e, "name", e.target.value)
    }
    const handleGenreChange = e => {
      handleChange(e, "genre", e.target.value)
    };

  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
             sx={formControl}
             id="filled-search"
             label="Search field"
             type="search"
             variant="filled"
             value={props.titleFilter}
             onChange={handleTextChange}
        />
        <FormControl sx={formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
                labelId="genre-label"
                id="genre-select"
                defaultValue=""
                value={props.genreFilter}
                onChange={handleGenreChange}
            >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}