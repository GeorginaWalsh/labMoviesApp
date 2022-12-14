import React from "react";
import Grid from "@mui/material/Grid";
import TvCard from "../movieCard/tv";

const TvList = ( {tvs, action }) => {
  let tvCards = tvs.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvCard key={m.id} tv={m} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TvList;
