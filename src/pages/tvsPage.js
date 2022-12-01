import React from "react";
import { getTvs } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import TvListPageTemplate from "../components/templateMovieListPage/tv";

import AddToActorFavouritesIcon from "../components/cardIcons/addToActorFavourites";

const TvsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvs', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // Redundant, but necessary to avoid app crashing.
//   const actorFavourites = actors.filter(m => m.actorFavourite)
//   localStorage.setItem('actorFavourites', JSON.stringify(actorFavourites))
//   const addToActorFavourites = (actorId) => true 


  return (
    <TvListPageTemplate
      title="Discover TV Series"
      tvs={tvs}
      action={(tv) => {
        return <AddToActorFavouritesIcon tv={tv} />
      }}
    />
);
};

export default TvsPage;