import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Great Food, Delivered To You</h2>
      <p>
        Select a meal from our diverse menu options and savor a satisfying lunch or dinner in the comfort of your own home.
      </p>
      <p>
        Our meals are expertly prepared by experienced chefs using only the freshest, highest-quality ingredients.
      </p>
    </section>
  );
};

export default MealsSummary;