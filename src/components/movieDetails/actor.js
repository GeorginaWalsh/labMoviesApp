import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import CribIcon from '@mui/icons-material/Crib';
import WorkIcon from '@mui/icons-material/Work';

import Drawer from "@mui/material/Drawer";
// import ActorCredits from "../movieReviews/actor"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Also known as:" sx={chip} color="primary" />
        </li>
        {actor.also_known_as.map((g, index) => (
          <li key={index}>
            <Chip label={g} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<CribIcon />} label={`${actor.place_of_birth}`} />
        <Chip
          icon={<WorkIcon />}
          label={`${actor.known_for_department}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${actor.popularity}`}
        />
        <Chip label={`Birthday: ${actor.birthday}`} />
      </Paper>
      {/* <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        {movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={chip} />
          </li>
        ))}
      </Paper> */}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Credits
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* <ActorCredits actor={actor} /> */}
      </Drawer>
    </>
  );
};

export default  ActorDetails ;