import React from "react";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  //console.log(props.result);

  return (
    <>
      <div className="row">
        <h5 style={{ marginBottom: "0" }}>
          <Link style={{color: "black"}} to={`/search/${props.result.name}`}>{props.result.name}</Link>
          <span style={{float:"right"}}>
            {props.result.rating > 0 ? props.result.rating : "-"}
          </span>
        </h5>
        {/* <h6>{props.result.pricing}</h6> */}
        <p style={{ fontSize: "small", margin: "0" }}>
          {props.result.description.slice(0, 100)}...
        </p>
      </div>
    </>
  );
};

export default SearchResult;
