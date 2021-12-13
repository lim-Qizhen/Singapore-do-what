import React from 'react';

const Home = (props) => {
  props.onClick(false)
  return (
    <div style={{fontFamily: "Corinthia, cursive", fontSize: "80px", textAlign: "center", marginTop: "50px"}}>
      Oh, the places you'll go.
    </div>
  );
};

export default Home;