import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
    return (
        <>
            <Header loggedIn={true}/>
            <SearchForm />
            <section className="movies">
                <div className="movies__divider" />
                <MoviesCardList isSavedMovies={false}/>  
            </section>
            <Footer />
        </>
    )
}

export default Movies;