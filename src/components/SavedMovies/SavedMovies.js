import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
    return (
        <>
            <Header loggedIn={true}/>
            <SearchForm />
            <section className="saved-movies">
                <div className="saved-movies__divider" />
                <MoviesCardList isSavedMovies={true}/>
            </section>
            <Footer />
        </>
    )
}

export default SavedMovies;