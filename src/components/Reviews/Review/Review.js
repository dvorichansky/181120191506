import React from "react";
import styles from "./Review.module.css";
import reviewsStore from "../../../store/reviews";
import { observer } from "mobx-react";

const Review = observer(
  class Review extends React.Component {
    render() {
      const reviewItems = reviewsStore.reviewsData.map((data, i) => {
        return (
          <div className={styles.item} key={i}>
            <div className={styles.head}>
              <h3 className={styles.name}>{data.name}</h3>
              <div className={styles.date}>{data.date}</div>
            </div>
            <div className={styles.message}>
              <p>{data.message}</p>
            </div>
          </div>
        );
      });

      return <>{reviewItems}</>;
    }
  }
);

export default Review;
