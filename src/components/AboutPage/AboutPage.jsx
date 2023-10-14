import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">
        This about page is for anyone to read!
      </h1>
      <div className="panel">
        <p>This about page is for anyone to read!</p>
      </div>
    </div>
  );
}

export default AboutPage;
