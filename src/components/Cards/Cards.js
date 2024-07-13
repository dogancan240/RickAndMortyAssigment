import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    // map methodu ile verileri tek tek geizp display değerini dolduruyoruz, return olarak da html componenti çıkartıyoruz
    display = results.map((i) => {
      let { id, name, image, location, status } = i;
      return (
        // Bütün child elemanlarının bir key valuesi olmalı, onun için id kullanıyoruz
        // img-fluid resimleri responsive yapıyor bootstrap
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styles.cards}`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div className={`${styles.content}`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            //bu function IIFE function olmalı yoksa hatta verir
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "not found";
  }

  console.log(results);
  return <>{display} </>;
};

export default Cards;
