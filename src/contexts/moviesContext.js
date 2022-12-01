import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )

  const [actorFavourites, setActorFavourites] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  const addToActorFavourites = (actor) => {
    let newFavourites = [...actorFavourites];
    if (!actorFavourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setActorFavourites(newFavourites);
  };


  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromActorFavourites = (actor) => {
    setActorFavourites( actorFavourites.filter(
      (mId) => mId !== actor.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToWatchList = (movie) => {
    let newWatchList = [...watchList];
    if (!watchList.includes(movie.id)) {
      newWatchList.push(movie.id);
    }
    setWatchList(newWatchList);
  };

  // We will use this function in a later section
  const removeFromWatchList = (movie) => {
    setWatchList( watchList.filter(
      (mId) => mId !== movie.id
    ) )
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        watchList,
        actorFavourites,
        addToFavourites,
        addToActorFavourites,
        removeFromFavourites,
        removeFromActorFavourites,
        addReview,
        addToWatchList,
        removeFromWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;