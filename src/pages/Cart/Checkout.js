import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  } `;

  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  } `;

  const postalCodeControlClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  } `;

  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  } `;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Ваше имя</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && (
          <p> Пожалуйста, введите правильное имя! </p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Улица</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValidity.street && (
          <p> Пожалуйста, введите существующую улицу! </p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Почтовый индекс</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!formInputValidity.postalCode && (
          <p> Пожалуйста, введите правильный почтовый индекс (6 цифр)! </p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Город</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.city && (
          <p> Пожалуйста, введите существующий город! </p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Закрыть
        </button>
        <button className={classes.submit}>Подтвердить</button>
      </div>
    </form>
  );
};

export default Checkout;
