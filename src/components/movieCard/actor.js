import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import MovieIcon from '@mui/icons-material/Movie';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';

import { MoviesContext } from "../../contexts/moviesContext";


export default function ActorCard({ actor, action }) {
   //const { watchList, addToWatchList } = useContext(MoviesContext);
 
//    if (watchList.find((id) => id === movie.id)) {
//      movie.favourite = true;
//    } else {
//      movie.favourite = false
//    }
 
//    const handleAddToWatchList = (e) => {
//      e.preventDefault();
//      addToWatchList(movie);
//    };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        // avatar={
        //   actor.favourite ? (
        //     <Avatar sx={{ backgroundColor: 'green' }}>
        //       <PlaylistAddIcon />
        //     </Avatar>
        //   ) : null
        // }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={14}>
            <Typography variant="h6" component="p">
              <MovieIcon fontSize="small" />
              {"Seen in \n'"}{actor.known_for[0].title ? actor.known_for[0].title : actor.known_for[0].name}
              {"'"}
            </Typography>
          </Grid>
          <Grid item xs={14}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {" Popularity Rating: "} {actor.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(actor)}
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}