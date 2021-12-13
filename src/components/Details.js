import React, { useState } from "react";
import { useParams } from "react-router";
import styles from "./Results.module.css";
import ReactStars from "react-rating-stars-component";
import { Markup } from "interweave";

const Details = (props) => {
  const params = useParams();
  const names = props.results.map((result) => result.name);
  const resultToDisplay = props.results[names.indexOf(params.name)];
  console.log(resultToDisplay.officialEmail);
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
            edit={true}
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
          <a href={"tel:" + phone}>
            {phone}{" "}
          </a>
          or drop <></>
          <a href={"mailto:" + email}>
            {email}
          </a>{" "}
          an email for enquiries!
        </p>
      );
    } else if (phone.length === 0 && email.length !== 0){
      return (
        <p className={styles.general}>
          Drop <></>
          <a href={"mailto:" + email}>
            {email}
          </a>{" "}
          an email for enquiries!
        </p>
      )
    } else if (phone.length !== 0 && email.length === 0){
      return (
        <p className={styles.general}>
          Call them at <></>
          <a href={"tel:" + phone}>
            {phone}{" "}
          </a>
          for enquiries!
        </p>
      )
    } 
  };

  return (
    <div className={styles.results} style={{ position: "relative" }}>
      <h3>
        {resultToDisplay.name}{" "}
        <span style={{ float: "right" }}>{resultToDisplay.rating}/5</span>
      </h3>
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
      <p className={styles.general}>
        Official Website: <> </>
        {resultToDisplay.officialWebsite.length !== 0 ? (
          <a
            href={"https://" + resultToDisplay.officialWebsite}
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
      <p className={styles.general}>
        Pricing:{" "}
        {resultToDisplay.pricing.others.length !== 0
          ? resultToDisplay.pricing.others
          : "-"}
      </p>
      {contactDisplay(phone, email)}
      {resultToDisplay.description}
      <Markup content={resultToDisplay.body} />
      <br />
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
