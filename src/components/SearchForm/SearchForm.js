import { useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../images/search_icon.svg"
import { useForm } from "../../hooks/useForm";

function SearchForm({ lastQuery, onSearch, onFilterChecked, isFilterChecked }) {
    const { values, handleChange, setValues, isValid, errors } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();

        onSearch(values['query']);
    }

    useEffect(() => {
        setValues({
            query: lastQuery,
        })
    }, []);


    return (
        <section className="search-form">
            <div className="search-form__container">
                <img className="search-form__icon" src={searchIcon} alt="" />
                <form className="search-form__info" onSubmit={handleSubmit}>
                    <input
                    name='query'
                    id="search-form__input"
                    className="search-form__input"
                    type="text"
                    value={values['query'] || ''}
                    minlenght="2"
                    onChange={handleChange}
                    maxlenght="50"
                    required
                    placeholder="Фильм"
                    />
                    <button className="search-form__btn">Найти</button>
                </form>
            </div>
            <div className="search-form__divider"></div>
            <FilterCheckbox onChecked={onFilterChecked} isFilterChecked={isFilterChecked } />
        </section>
    )
}

export default SearchForm;