import React, { useState } from "react";
import { DisplayMapClass } from "./DisplayMapClass";

const Plan = (props) => {
  console.log(props.wishlist[0])
  const wishlistDisplay = props.wishlist.map((want) => {
    return (
      <p>
        <i className="fa fa-heart"></i>
        <span
          style={{
            fontFamily: "Julius Sans One, sans-serif",
            padding: "5px",
            listStyle: "none",
          }}
        >
          {want.name}
        </span>
        <br />
      </p>
    );
  });
  const wishlistStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginLeft: "50px",
    marginTop: "50px",
    padding: "10px",
    minWidth: "160px",
    flexBasis: "280px",
  };
  const planStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px",
    padding: "10px",
    flexGrow: "2",
    flexBasis: "content",
    flexShrink: "0",
  };

  const [plan, setPlan] = useState([
    { time: "", activity: "", lat: 0, long: 0 },
  ]);
  /////These functions are just to make sure we delete the right row
  const handleTimeChange = (e) => {
    plan[e.target.id].time = e.target.value;
    setPlan([...plan]);
  };

  const handleActivityChange = (e) => {
    plan[e.target.id].activity = e.target.value;
    //finding latitude and longitude to save for mapping
    let wishlistIndex ;
    for (let i = 0; i < props.wishlist.length; i++){
      if(props.wishlist[i].name === e.target.value){
        wishlistIndex = i;
      }
    }
    
    console.log(wishlistIndex)
    console.log(props.wishlist[wishlistIndex])
    plan[e.target.id].lat = props.wishlist[wishlistIndex].lat;
    plan[e.target.id].long = props.wishlist[wishlistIndex].long;
    setPlan([...plan]);
  };
  console.log(plan)
  const handleDelete = (e) => {
    if (plan.length > 1) {
      setPlan((prevState) => {
        return [...prevState].filter(
          (element, index) => index !== parseInt(e.target.id)
        );
      });
    }
  };

  const itinerary = plan.map((event, index) => {
    return (
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input
          style={{ flexBasis: "content", flexShrink: "0", flexGrow: "0" }}
          type="time"
          id={index}
          onChange={handleTimeChange}
          value={plan[index].time}
          required
        ></input>
        <select
          style={{
            margin: "auto",
            marginLeft: "10px",
            flexGrow: "2",
            flexBasis: "content",
            flexShrink: "0",
          }}
          onChange={handleActivityChange}
          value={plan[index].activity}
          id={index}
        >
          <option value="" disabled hidden>
            Choose your activity
          </option>
          {props.wishlist.map((want) => {
            return <option value={`${want.name}`}>{want.name}</option>;
          })}
        </select>
        <i
          onClick={handleDelete}
          style={{ marginLeft: "10px", cursor: "pointer" }}
          className="fa fa-minus-circle"
          id={index}
        ></i>
      </div>
    );
  });

  const handleAdd = () => {
    setPlan((prevState) => {
      return [...prevState, { time: "", activity: "" }];
    });
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
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
          {wishlistDisplay}
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
          <br />
          <i
            className="fa fa-plus-circle"
            style={{ cursor: "pointer", fontSize: "20px", float: "right" }}
            onClick={handleAdd}
          ></i>
        </div>
      </div>
      <br />
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <DisplayMapClass plan={plan} />
      </div>
    </>
  );
};

export default Plan;
