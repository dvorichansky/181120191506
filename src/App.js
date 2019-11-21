import React from "react";
import styles from "./App.module.css";
import Information from "./components/Information/Information";
import Reviews from "./components/Reviews/Reviews";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Information />
        <Reviews />
      </div>
    );
  }
}

export default App;
