import React from "react";
import { getTvs } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import TvListPageTemplate from "../components/templateMovieListPage/tv";

import AddToTvFavouritesIcon from "../components/cardIcons/addToTvFavourites";

const TvsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvs', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  const tvFavourites = tvs.filter(m => m.tvFavourite)
  localStorage.setItem('tvFavourites', JSON.stringify(tvFavourites))
  const addToTvFavourites = (tvId) => true 


  return (
    <TvListPageTemplate
      title="Discover TV Series"
      tvs={tvs}
      action={(tv) => {
        return <AddToTvFavouritesIcon tv={tv} />
      }}
    />
);
};

export default TvsPage;