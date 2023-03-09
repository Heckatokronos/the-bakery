import MealItem from "../../shared/UI/Meal/MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Суши",
    description: "Вкуснейшая рыба и овощи",
    price: 599.9,
  },
  {
    id: "m2",
    name: "Шницель",
    description: "Немецкий деликатес!",
    price: 299.9,
  },
  {
    id: "m3",
    name: "Барбекю-бургер",
    description: "Американский, сырой, мясной",
    price: 299.9,
  },
  {
    id: "m4",
    name: "Миска зелени",
    description: "Полезная... и зеленая...",
    price: 349.9,
  },
];

const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />
));

export default mealsList;
