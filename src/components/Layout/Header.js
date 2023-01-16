import foodImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1>Karthik's bites</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt="Food"/>
        </div>
    </>;
}

export default Header;