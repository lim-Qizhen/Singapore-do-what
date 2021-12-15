import React from 'react';

const Home = (props) => {
  props.onClick(false)
  return (
    <div style={{fontFamily: "Corinthia, cursive", fontSize: "80px", textAlign: "center", marginTop: "50px"}}>
      Singapore do what?
    </div>
  );
};

export default Home;