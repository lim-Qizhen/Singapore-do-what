import React, { useState } from "react";

const Plan = (props) => {
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
          {want}
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

  const [plan, setPlan] = useState([{ time: "", activity: "" }]);
  /////This function is just to make sure we delete the right row
  const handleTimeChange = (e) => {
    plan[e.target.id].time = e.target.value;
    setPlan([...plan]);
  };

  const handleActivityChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.id)
    plan[e.target.id].activity = e.target.value;
    console.log(plan);
    setPlan([...plan]);
  };

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
          defaultValue=""
        >
          <option value="" disabled hidden>
            Choose your activity
          </option>
          {props.wishlist.map((want) => {
            return <option value={`${want}`}>{want}</option>;
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
  );
};

export default Plan;
