import foodImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h3>Spice</h3>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt="Food"/>
        </div>
    </>;
}

export default Header;