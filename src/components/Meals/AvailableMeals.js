import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const MENU_ITEMS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Fresh, raw fish on rice.',
      price: 23.32,
    },
    {
      id: 'm2',
      name: 'Biryani',
      description: 'Spicy, fragrant rice and meat dish!',
      price: 14.35,
    },
    {
      id: 'm3',
      name: 'Chicken Burger',
      description: 'Juicy, flavorful chicken patty sandwich.',
      price: 10.55,
    },
    {
      id: 'm4',
      name: 'Chicken Salad',
      description: 'Cool, refreshing, diced chicken salad.',
      price: 12.87,
    },
  ];

const AvailableMeals = () => {
    const itemsList = MENU_ITEMS.map(item => <MealItem key={item.id} id={item.id} meal={item}></MealItem>);

    return <section className={classes.meals}>
        <Card>
            <ul>
                {itemsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals