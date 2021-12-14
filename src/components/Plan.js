import React, { useState } from "react";

const Plan = (props) => {
    console.log(typeof props.wishlist)

  const handleAdd = () => {
    console.log("clicked!");
  };
  props.wishlist.forEach((want) => console.log(want))
  const wishlistDisplay = props.wishlist.map((want) => {
    return <li style={{fontFamily: "Julius Sans One, sans-serif", padding: "2px"}}>{want}</li>;
  });
  const wishlistStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginLeft: "50px",
    marginTop: "50px",
    padding: "10px",
    width: "200px",
  };
  const planStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px",
    padding: "10px",
    width: "300px",
    flexGrow: "2",
  };
  
  const itinerary = (
        <div style={{ display: "flex" }}>
            <input placeholder="time" type="time" step="15min" required></input>
            <select style={{ marginLeft: "10px", flexGrow: "2" }}>
            {props.wishlist.map((want)=>{
                return(<option>{want}</option>)
            })}
            </select>
            <i style={{ marginLeft:"10px"}} class="fa fa-minus-circle"></i>
      </div>
      )
  

  return (
    <div style={{ display: "flex" }}>
      <div className="wishlist" style={wishlistStyles}>
        <p
          style={{
            margin: "0",
            fontFamily: "Corinthia, cursive",
            fontSize: "xx-large",
          }}
        >
          Your Wishlist
        </p>
        <ul>{wishlistDisplay}</ul>
      </div>
      <div style={planStyles}>
        <p
          style={{
            margin: "0",
            fontFamily: "Corinthia, cursive",
            fontSize: "xx-large",
          }}
        >
          The Plan
        </p>
        {itinerary}
        <br/>
        <i
          className="fa fa-plus-circle"
          style={{ cursor: "pointer", fontSize: "30px", float: "right" }}
          onClick={handleAdd}
        ></i> 
      </div>
    </div>
  );
};

export default Plan;
