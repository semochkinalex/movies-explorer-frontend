import './Header.css';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profileIcon.svg';
import burger from '../../images/burger.png';
import { Route, Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Route exact path="/">
                <header className="header header__landing">
                    <Link to="/">
                        <img className="header__logo" alt="logo-image" src={logo} />
                    </Link>
                    <nav className="header__buttons">
                        <NavLink to="/signup" className="header__register">Регистрация</NavLink>
                        <NavLink to="/signin" className="header__login">Войти</NavLink>
                    </nav>
                </header>
            </Route>
            <Route path="/movies">
                <header className="header">
                    <Link to="/">
                        <img className="header__logo" alt="logo-image" src={logo} />
                    </Link>
                    <nav className="header__nav">
                        <ul className="header__links">
                            <li className="header__link">Фильмы</li>
                            <li className="header__link">Сохранённые фильмы</li>
                        </ul>
                        <div className="header__profile">
                            <img className="header__profile-icon" alt="profile-icon" src={profileIcon} />
                            <p className="header__profile-text">Аккаунт</p>
                        </div>
                        <img className="header__burger header__burger-shown" alt="burger" src={burger} />
                    </nav>
                </header>
            </Route>
            <Route path="/saved-movies">
                <header className="header">
                    <Link to="/">
                        <img className="header__logo" alt="logo-image" src={logo} />
                    </Link>
                    <nav className="header__nav">
                        <ul className="header__links">
                            <li className="header__link">Фильмы</li>
                            <li className="header__link">Сохранённые фильмы</li>
                        </ul>
                        <div className="header__profile">
                            <img className="header__profile-icon" alt="profile-icon" src={profileIcon} />
                            <p className="header__profile-text">Аккаунт</p>
                        </div>
                        <img className="header__burger header__burger-shown" alt="burger" src={burger} />
                    </nav>
                </header>
            </Route>
            <Route path="/profile">
                <header className="header">
                    <Link to="/">
                        <img className="header__logo" alt="logo-image" src={logo} />
                    </Link>
                    <nav className="header__nav">
                        <ul className="header__links">
                            <li className="header__link">Фильмы</li>
                            <li className="header__link">Сохранённые фильмы</li>
                        </ul>
                        <div className="header__profile">
                            <img className="header__profile-icon" alt="profile-icon" src={profileIcon} />
                            <p className="header__profile-text">Аккаунт</p>
                        </div>
                        <img className="header__burger header__burger-shown" alt="burger" src={burger} />
                    </nav>
                </header>
            </Route>
        </>
    );
};

export default Header;