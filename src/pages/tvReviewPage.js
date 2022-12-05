import React from "react";
import { useLocation } from "react-router-dom";
import TemplateTvPage from "../components/templateMoviePage/tv";
import TvReview from "../components/movieReview/tv";

const TvReviewPage = (props) => {
  let location = useLocation();
  const {tv, tvReview} = location.state;

  return (
    <TemplateTvPage tv={tv}>
      <TvReview tvReview={tvReview} />
    </TemplateTvPage>
  );
};

export default TvReviewPage;