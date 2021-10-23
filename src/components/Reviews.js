import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./Reviews.css";

const Reviews = ({ data }) => {
  const ratingTotoal = data
    .map((item) => item.rating)
    .reduce((prev, curr) => prev + curr, 0);
  const ratingAv = Math.round(ratingTotoal / data.length);

  return (
    <div className="reviews">
      <div className="reviewsContainer">
        <div className="reviewHead">
          <div className="reviewShow">
            <p className="text">{data.length} Reviews</p>
            <div className="ratingStar">
              <div className="positive">
                {Array(5 + ratingAv - 5)
                  .fill()
                  .map((_, i) => (
                    <p>
                      <FaStar />
                    </p>
                  ))}
              </div>
              <div className="negative">
                {Array(5 - ratingAv)
                  .fill()
                  .map((_, i) => (
                    <p>
                      <FaRegStar />
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="reviewsContainer">
          {data.map((items) => {
            const { rating, name, user, description, time } = items;
            return (
              <>
                <div className="card">
                  <div className="reviewCardHead">
                    <div className="reviewTitleLeft">
                      <div className="ratingStar">
                        <div className="positive">
                          {Array(5 + rating - 5)
                            .fill()
                            .map((_, i) => (
                              <p>
                                <FaStar />
                              </p>
                            ))}
                        </div>
                        <div className="negative">
                          {Array(5 - rating)
                            .fill()
                            .map((_, i) => (
                              <p>
                                <FaRegStar />
                              </p>
                            ))}
                        </div>
                      </div>
                      <p>
                        {" "}
                        for <span>{name}</span>
                      </p>
                    </div>
                    <div>{time} ago</div>
                  </div>
                  {description && (
                    <div className="ratingDes">
                      <p>{description}</p>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
