import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Вкусная еда спешит к вам</h2>
      <p>
        Выберите свое любимое блюдо из широкого ассортимента доступных блюд и
        наслаждайтесь вкусным обедом или ужином дома.
      </p>
      <p>
        Все наши блюда готовятся из высококачественных ингредиентов, только что
        приготовленных и конечно же, опытными поварами!
      </p>
    </section>
  );
};

export default MealsSummary;
