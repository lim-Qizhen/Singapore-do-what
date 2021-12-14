import React from "react";
import styles from "./Results.module.css"

const Plan = (props) => {
  const wishlistDisplay = props.wishlist.map((want) => {
    return <li>{want}</li>;
  });
  const wishlistStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginLeft: "50px",
    marginTop: "50px",
    padding: "10px",
    width: "200px",
  }
  const planStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px",
    padding: "10px",
    width: "300px",
  }
  return (
    <div style = {{display: "flex"}}>
      <div className = "wishlist" style = {wishlistStyles}>
        <p style={{margin: "0", fontFamily: "Corinthia, cursive", fontSize: "xx-large"}}>Your Wishlist</p>
        <ul>
          {wishlistDisplay}
        </ul>
      </div>
      <div style={planStyles}>
      <p style={{margin: "0", fontFamily: "Corinthia, cursive", fontSize: "xx-large"}}>The Plan</p>
      </div>
    </div>
  );
};

export default Plan;
