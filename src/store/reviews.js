import { decorate, observable, action, computed } from "mobx";

class ReviewsStore {
  reviewsData = [
    {
      name: "Самуил",
      date: "13 октября 2011",
      message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
    },
    {
      name: "Лилия Семёновна",
      date: "14 октября 2011",
      message:
        "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
    },
    {
      name: "Лилия Семёновна",
      date: "14 октября 2011",
      message:
        "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
    }
  ];

  get date() {
    const monthAll = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ];

    const today = new Date(),
      month = monthAll[today.getMonth()],
      year = today.getFullYear(),
      day = String(today.getDate()).padStart(2, "0");

    return `${day} ${month} ${year}`;
  }

  addReview(data) {
    this.reviewsData.push({
      name: "Вы",
      date: this.date,
      message: data.current.value
    });
  }
}

decorate(ReviewsStore, {
  reviewsData: observable,
  addReview: action,
  date: computed
});

export default new ReviewsStore();
