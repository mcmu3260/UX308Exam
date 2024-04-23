import {hello, colour_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2({ colour1, colour2 }) {
  const mixedColor = colour_mix(colour1, colour2);

  return (
    <div>
      <h2>Colour Mix</h2>
      <p>
        First colour: <strong>{colour1}</strong>
      </p>
      <p>
        Second colour: <strong>{colour2}</strong>
      </p>
      <p>
        Colour mix:{" "}
        <strong>
          {mixedColor === "Error" ? (
            <span style={{ color: "red" }}>Error</span>
          ) : (
            mixedColor
          )}
        </strong>
      </p>
    </div>
  );
}

function Question3({ val1, val2, val3 }) {
  const product = largest_product(val1, val2, val3);

  return (
    <div>
      <h2>Largest Product</h2>
      <p>
        First value: <strong>{val1}</strong>
      </p>
      <p>
        Second value: <strong>{val2}</strong>
      </p>
      <p>
        Third value: <strong>{val3}</strong>
      </p>
      <p>
        Largest product: <strong>{product}</strong>
      </p>
    </div>
  );
}

function Question4({ day_num }) {
  const day = day_of_the_week(day_num);

  return (
    <div>
      <h2>Day of the Week</h2>
      <p>
        Please enter a number between 1 and 7: <strong>{day_num}</strong>
      </p>
      <p>
        Day of the week:{" "}
        <strong>{day === "Error" ? <span style={{ color: "red" }}>Error</span> : day}</strong>
      </p>
    </div>
  );
}

function Question5({ status, years, salary }) {
  const new_salary = pay_raise(status, years, salary);

  return (
    <div>
      <h2>Pay Raise</h2>
      <p>
        Employment type: <strong>{status}</strong>
      </p>
      <p>
        Years of service: <strong>{years}</strong>
      </p>
      <p>
        Current salary: <strong>${salary.toFixed(2)}</strong>
      </p>
      <p>
        New salary: <strong>${new_salary.toFixed(2)}</strong>
      </p>
    </div>
  );
}

function Question6({ year }) {
  const result = is_leap(year);

  return (
    <div>
      <h2>Leap Year</h2>
      <p>
        Year: <strong>{year}</strong>
      </p>
      <p>
        Leap year:{" "}
        <strong>{result ? "True" : "False"}</strong>
      </p>
    </div>
  );
}

export {Question1, Question2, Question3, Question4, Question5, Question6}