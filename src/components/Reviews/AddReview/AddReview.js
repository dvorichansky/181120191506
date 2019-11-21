import React from "react";
import styles from "./AddReview.module.css";
import reviewsStore from "../../../store/reviews";

class AddReview extends React.Component {
  textareaEl = React.createRef();

  addReview = () => {
    const textarea = this.textareaEl.current;
    if (textarea.value) {
      reviewsStore.addReview(this.textareaEl);
      textarea.value = "";
    }
  };

  keydownHandler = e => {
    if (e.keyCode === 13 && e.ctrlKey) this.addReview();
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler);
  }

  render() {
    return (
      <div className={styles.box}>
        <textarea
          className={styles.textarea}
          ref={this.textareaEl}
        ></textarea>
        <button onClick={this.addReview} className={styles.button}>
          Написать консультанту
        </button>
      </div>
    );
  }
}

export default AddReview;
