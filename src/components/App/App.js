import './App.css';
import Header from '../Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import moviesApi from '../../utils/MoviesApi';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [searchedMovieList, setSearchedMovieList] = useState([]);

  // SearchForm

  const [isSearching, setIsSearching] = useState(false);
  const [hasAnswers, setHasAnswers] = useState(true); // Не иницирует плейродер сразу
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    const movies = localStorage.getItem('movies');
    if (!movies) {
      return handleMovies();
    }

    return setMovieList(JSON.parse(movies));
  }, []);

  function handleMovies() {
    return moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        setMovieList(movies);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  async function filterMovies(query, shortFilmsDecision) {
    // Убираем все пред. сообщения
    setHasAnswers(false);
    setHasErrors(false);
    // Начинаем поиск
    setIsSearching(true);

    const regExp = new RegExp(`${query}`, "i");
    const validDuration = shortFilmsDecision ? 0 : 40;

    const filteredMovies = movieList.filter((e) => {
      return regExp.test(e.nameRU) && e.duration > validDuration;
    });

    return filteredMovies;
  }


  function handleSearchForm(query, shortFilmsDecision) {
    filterMovies(query, shortFilmsDecision)
      .then((filteredMovies) => {
        if (filteredMovies.length) {
          setSearchedMovieList(filteredMovies);
          setHasAnswers(true);
        } else {
          setHasAnswers(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setHasErrors(true);
      })
      .finally(() => {
        setIsSearching(false);
      })
  }

  // Временное решение с isNotLogged
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* Временное решение с header */}
          <Header isNotLogged={true} />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Registration />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/movies">
          <Header />
          <SearchForm handleSearchForm={handleSearchForm} hasAnswers={hasAnswers} />
          <MoviesCardList isSearching={isSearching} movieList={searchedMovieList} hasAnswers={hasAnswers} hasErrors={hasErrors} />
          <Footer />
          <Navigation />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SearchForm />
          <SavedMoviesCardList />
          <Footer />
          <Navigation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
