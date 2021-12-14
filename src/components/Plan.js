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

  const [plan, setPlan] = useState([{ time: "", activity: "" }]);
  const handleTimeChange = (e) => {
    console.log(e.target.value);
  };

  const handleDelete = (e) => {
    console.log(plan);
    console.log(parseInt(e.target.id))

    setPlan((prevState) => {
      return [...prevState].filter((element, index) => index !== parseInt(e.target.id));
    });
  };

  const itinerary = plan.map((event, index) => {
    return (
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input type="time" onChange={handleTimeChange} required></input>
        <select style={{ margin: "auto", marginLeft: "10px", flexGrow: "2" }}>
          {props.wishlist.map((want) => {
            return <option>{want}</option>;
          })}
        </select>
        <i
          onClick={handleDelete}
          style={{ marginLeft: "10px" }}
          class="fa fa-minus-circle"
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
