import React from "react";
import Title from "./Title";
import { tours } from "../data";
const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="Featured" subTitle="Tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const {
              id,
              image_source,
              date,
              title,
              text,
              location,
              duration,
              cost,
            } = tour;

            return (
              <article key={id} className="tour-card">
                <div className="tour-img-container">
                  <img src={image_source} className="tour-img" alt="" />
                  <p className="tour-date">august 26th, 2020</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{date}</p>
                    <p>{duration}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
