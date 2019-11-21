import React from "react";
import styles from "./Information.module.css";
import img from "./InformationManager.png";
import Statistics from "./Statistics/Statistics";

class Information extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.image}>
          <img src={img} alt="manager"></img>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Вероника Ростова</h2>
          <h5 className={styles.description}>
            Менеджер по продажам
          </h5>
          <div className={styles.message}>
            <p>
              Подберу для вас самые лучшие предложения. <br></br>Мои услуги абсолютно
              бесплатны
            </p>
          </div>
          <Statistics />
        </div>
      </div>
    );
  }
}

export default Information;
