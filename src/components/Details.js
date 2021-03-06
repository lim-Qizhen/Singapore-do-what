import React from "react";
import { useParams } from "react-router";
import styles from "./Results.module.css";
import ReactStars from "react-rating-stars-component";
import { Markup } from "interweave";

const Details = (props) => {
  const params = useParams();
  const names = props.results.map((result) => result.name);
  const resultToDisplay = props.results[names.indexOf(params.name)];
  const allReviews = resultToDisplay.reviews;
  const reviewsDisplay = allReviews.map((review) => {
    return (
      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "0" }}>
          {review.authorName}
          <span style={{ float: "right", color: "rgb(106,106,106)" }}>
            {review.time.split("T")[0]}
          </span>
        </p>
        <div>
          <ReactStars
            value={review.rating}
            size={18}
            isHalf={true}
            edit={false}
            activeColor="rgb(248, 162, 42)"
          />
        </div>
        <p style={{ fontSize: "small", margin: "0" }}>{review.text}</p>
      </div>
    );
  });
  const phone = resultToDisplay.contact.primaryContactNo;
  const email = resultToDisplay.officialEmail;
  const contactDisplay = (phone, email) => {
    if (phone.length !== 0 && email.length !== 0) {
      return (
        <p className={styles.general}>
          Call them at <></>
          <a href={"tel:" + phone}>{phone} </a>
          or drop <></>
          <a href={"mailto:" + email}>{email}</a> an email for enquiries!
        </p>
      );
    } else if (phone.length === 0 && email.length !== 0) {
      return (
        <p className={styles.general}>
          Drop <></>
          <a href={"mailto:" + email}>{email}</a> an email for enquiries!
        </p>
      );
    } else if (phone.length !== 0 && email.length === 0) {
      return (
        <p className={styles.general}>
          Call them at <></>
          <a href={"tel:" + phone}>{phone} </a>
          for enquiries!
        </p>
      );
    }
  };
  /////determining if already in wishlist
  let wishlistIndex = -1;
  for (let i = 0; i < props.wishlist.length; i++) {
    if (props.wishlist[i].name === resultToDisplay.name) {
      wishlistIndex = i;
    }
  }
  const inWishlist = wishlistIndex !== -1;
  /////setting Heart Colour
  let heartColour = "black";
  inWishlist ? (heartColour = "red") : (heartColour = "black");

  const handleClick = (e) => {
    if (!inWishlist) {
      props.onLike((prevState) => {
        return [
          ...prevState,
          {
            name: resultToDisplay.name,
            lat: resultToDisplay.location.latitude,
            long: resultToDisplay.location.longitude,
          },
        ];
      });
    } else {
      props.onLike((prevState) => {
        return [...prevState].filter(
          (element, index) => index !== wishlistIndex
        );
      });
    }
  };

  /////getting map
  // const platform = new H.service.Platform({
  //   apikey: "PQXjrqipEq_9dEtEbGpmnSBXUOOhjS20oZb1DrTlSYE",
  // });
  // const maptypes = platform.createDefaultLayers();
  // console.log(maptypes);
  // const map = new H.Map(document.getElementById('mapdiv'), maptypes.vector.normal.map, {
  //   center: {lat: 0, lng: 51},
  //   zoom: 8
  // });

  return (
    <div className={styles.results} style={{ position: "relative" }}>
      <h3>
        {resultToDisplay.name}{" "}
        <span style={{ float: "right" }}>{resultToDisplay.rating}/5</span>
      </h3>
      <button onClick={handleClick}>
        <i className="fa fa-heart" style={{ color: `${heartColour}` }} /> I
        want!
      </button>
      <div className={styles.rating}>
        <ReactStars
          value={resultToDisplay.rating}
          size={24}
          isHalf={true}
          edit={false}
          activeColor="rgb(248, 162, 42)"
        />
      </div>
      <br />
      <p className={styles.general}>
        Address:{" "}
        {resultToDisplay.address.streetName !== ""
          ? `${resultToDisplay.address.block} ${resultToDisplay.address.streetName}`
          : "-"}
      </p>
      <p className={styles.general}>
        Nearest MRT station: {resultToDisplay.nearestMrtStation}
      </p>
      {/* Official Website */}
      <p className={styles.general}>
        Official Website: <> </>
        {resultToDisplay.officialWebsite.length !== 0 ? (
          <a
            href={
              resultToDisplay.officialWebsite[0] === "h"
                ? resultToDisplay.officialWebsite
                : "https://" + resultToDisplay.officialWebsite
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {resultToDisplay.officialWebsite !== ""
              ? `${resultToDisplay.officialWebsite}`
              : "-"}
          </a>
        ) : (
          "-"
        )}
      </p>
      {/* Price */}
      <p className={styles.general}>
        Pricing:{" "}
        {resultToDisplay.pricing.others.length !== 0
          ? resultToDisplay.pricing.others
          : "-"}
      </p>
      {contactDisplay(phone, email)}
      {resultToDisplay.description}
      <Markup content={resultToDisplay.body} />
      <h4>
        Reviews{" "}
        <span style={{ fontWeight: "lighter", color: "rgb(106,106,106)" }}>
          ({allReviews.length} reviews)
        </span>
      </h4>
      {reviewsDisplay}
    </div>
  );
};

export default Details;
