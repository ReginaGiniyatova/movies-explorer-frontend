import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../images/search_icon.svg"

function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__container">
                <img className="search-form__icon" src={searchIcon} alt="" />
                <form className="search-form__info">
                    <input
                    id="search-form__input"
                    className="search-form__input"
                    type="text"
                    minlenght="2"
                    maxlenght="50"
                    required
                    placeholder="Фильм"
                    />
                    <button className="search-form__btn">Найти</button>
                </form>
            </div>
            <div className="search-form__divider"></div>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;