import React from "react";
import styles from "./Reviews.module.css";
import Review from "./Review/Review";
import AddReview from "./AddReview/AddReview";

class Reviews extends React.Component {
  render() {
    return (
      <>
        <div className={styles.box}>
          <div className={styles.head}>
            <div className={styles.title}>
              <h2>Последние отзывы</h2>
              <a href="#">Все отзывы</a>
            </div>
            <div className={styles.data}>
              <a href="#">
                <i
                  className={styles.icon}
                  style={{ backgroundPosition: "0 0" }}
                ></i>
                131
              </a>
              <a href="#">
                <i
                  className={styles.icon}
                  style={{ backgroundPosition: "16px 0" }}
                ></i>
                14
              </a>
            </div>
          </div>
          <Review />
        </div>
        <AddReview />
      </>
    );
  }
}

export default Reviews;
