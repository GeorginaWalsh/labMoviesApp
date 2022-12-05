import React from "react";

const TvReview =  ({ tvReview }) => {
  return (
    <>
      <p>Review By: {tvReview.author} </p>
      <p>{tvReview.content} </p>
    </>
  );
};
export default TvReview