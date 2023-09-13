import { useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../images/search_icon.svg"
import { useForm } from "../../hooks/useForm";
import {
    SEARCH_FORM_REGEX,
    SEARCH_FORM_EMPTY_MESSAGE,
} from "../../utils/Constants";

function SearchForm({ lastQuery, onSearch, onFilterChecked, isChecked, onError, resetErrors }) {
    const { values, handleChange, setValues, isValid, errors } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = values['query'];

        if(value && isValueValid(value)) {
            resetErrors();
            onSearch(value);
        }
        else onError(SEARCH_FORM_EMPTY_MESSAGE);
    };

    function isValueValid(value) {
        return value.trim().match(SEARCH_FORM_REGEX)
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
                    onChange={handleChange}
                    placeholder="Фильм"
                    novalidate
                    />
                    <button className="search-form__btn">Найти</button>
                </form>
            </div>
            <div className="search-form__divider"></div>
            <FilterCheckbox onChecked={onFilterChecked} isFilterChecked={isChecked } />
        </section>
    )
}

export default SearchForm;