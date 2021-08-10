import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpeg';
import logo from '../../assets/logo.svg';
import classes from './Header.module.css';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.headerLogo} src={logo} alt="Food Logo" />
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
